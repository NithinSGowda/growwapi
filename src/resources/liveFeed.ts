import { Subscription } from 'nats';
import { connectToLiveFeed, generateSubscriptionTopic, liveFeedDecoder } from '../utils/LiveFeed';
import { LiveFeedCallbackData, LiveFeedConnection, LiveFeedSubscriptionType } from '../types';

export class LiveFeed {
  private connection: LiveFeedConnection | null = null;
  private subscriptions: Map<string, LiveFeedSubscriptionType> = new Map();

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
    this.subscriptions.set(topic, type);
    return this.connection?.stream?.subscribe(topic);
  }

  unsubscribe(subscription: Subscription) {
    if (this.connection) {
      subscription.unsubscribe();
    }
  }

  async consume(subscription: Subscription, callback: (data: LiveFeedCallbackData) => void) {
    this.executeWithReconnectionStrategy(async () => {
      for await (const m of subscription) {
        console.log(m.data, Buffer.from(m.data).toString('hex'));
        const feedType = this.subscriptions.get(m.subject) as LiveFeedSubscriptionType;
        const liveFeedData = liveFeedDecoder(feedType, m.data);

        callback(liveFeedData);
      }
    });
  }

  private async executeWithReconnectionStrategy(action: () => Promise<void>) {
    if (!this.connection) {
      console.error('Connection is not established. Please connect first.');
      return;
    }

    try {
      await action();
    } catch (error) {
      console.log(error);
      // TODO - Handle specific error cases like disconnection

      // if (error.message === 'disconnected_error') {
      //   console.warn('Socket disconnected. Reconnecting...');
      //   this.connectionStrategy();
      // } else {
      //   console.error('Error occurred:', error);
      // }
    }
  }
}
