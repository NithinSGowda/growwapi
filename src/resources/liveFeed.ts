import { Subscription as NatsSubscription } from 'nats';
import { connectToLiveFeed, generateSubscriptionTopic, liveFeedDecoder, retryStrategy } from '../utils/LiveFeed';
import { LiveFeedConnection, LiveFeedSubscriptionType, Subscription, SubscriptionCallback } from '../types';

export class LiveFeed {
  private connection: LiveFeedConnection | null = null;
  private subscriptions: Map<string, Subscription> = new Map();
  private subscriptionCallbacks: Map<string, SubscriptionCallback> = new Map();
  private retryCount: number = 0;

  async connect() {
    this.connection = await connectToLiveFeed();
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.stream?.close();
      this.connection = null;
    }
  }

  async subscribe(type: LiveFeedSubscriptionType, exchangeToken?: number): Promise<Subscription | undefined> {
    const subscriptionId = this.connection?.credentials.subscriptionId;
    if (!subscriptionId) {
      console.error('Subscription ID is not available. Please connect first.');
      return undefined;
    }

    const topic = await generateSubscriptionTopic(type, subscriptionId, exchangeToken);
    const natsSubscription = this.connection?.stream?.subscribe(topic);
    if (!natsSubscription) {
      console.error(`Failed to subscribe to topic: ${topic}`);
      return undefined;
    }

    const subscription: Subscription = {
      natsSubscription, type, exchangeToken,
      consume: (callback: SubscriptionCallback) => {
        this.subscriptionCallbacks.set(topic, callback);
        this.consume(natsSubscription, callback);
      },
      unsubscribe: () => {
        this.subscriptionCallbacks.delete(topic);
        this.unsubscribe(natsSubscription, topic);
      }
    };

    this.subscriptions.set(topic, subscription);

    return subscription;
  }

  unsubscribe(subscription: NatsSubscription, topic: string) {
    if (this.connection) {
      subscription.unsubscribe();
      this.subscriptions.delete(topic);
      console.log(`Unsubscribed from topic: ${topic}`);
    }
  }

  async consume(subscription: NatsSubscription, callback: SubscriptionCallback) {
    retryStrategy(
      this.connection,
      this.retryCount,
      () => this.disconnect(),
      () => this.reconnect(),
      async () => {
        for await (const m of subscription) {
          const feedType = this.subscriptions.get(m.subject)?.type as LiveFeedSubscriptionType;
          const liveFeedData = liveFeedDecoder(feedType, m.data);

          callback(liveFeedData);
        }
      },
    );
  }

  private async reconnect() {
    await this.connect();
    this.retryCount = 0;

    for (const subscription of this.subscriptions.values()) {
      const newSubscription = await this.subscribe(subscription.type, subscription.exchangeToken);
      if (newSubscription) {
        const callback = this.subscriptionCallbacks.get(subscription.natsSubscription.getSubject());
        if (callback) {
          newSubscription.consume(callback);
        }
      }
    }
  }
}
