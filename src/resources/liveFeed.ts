import { NatsConnection, Subscription } from 'nats';
import { connectToLiveFeed, generateSubscriptionTopic } from '../utils/liveFeed';
import { LiveFeedPriceDecoder } from '../utils/Protobuffer/protobuffer';
import { LiveFeedPrice } from '../types';

// TODO - Add more types for callback response
export class LiveFeed {
  private connection: NatsConnection | null = null;
  private callback: (data: LiveFeedPrice) => void = () => null;

  async connect(callback: (data: any) => void) {
    this.callback = callback;
    this.connection = await connectToLiveFeed();
  }

  async disconnect() {
    if (this.connection) {
      await this.connection.close();
      this.connection = null;
    }
  }

  async subscribe(exchangeToken: number): Promise<Subscription | undefined> {
    const topic = await generateSubscriptionTopic(exchangeToken);
    return this.connection?.subscribe(topic);
  }

  unsubscribe(subscription: Subscription) {
    if (this.connection) {
      subscription.unsubscribe();
    }
  }

  async consume(subscription: Subscription) {
    this.executeWithReconnectionStrategy(async () => {
      for await (const m of subscription) {
        const decoded = LiveFeedPriceDecoder.decode(m.data);
        const liveFeedData = JSON.parse(JSON.stringify(decoded, null, 2)) as LiveFeedPrice;

        this.callback(liveFeedData);
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
