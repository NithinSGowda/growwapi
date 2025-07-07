import { Subscription as NatsSubscription } from 'nats';
import { LiveFeedCallbackData, LiveFeedSubscriptionType } from '../..';

export interface Subscription {
  natsSubscription: NatsSubscription;
  type: LiveFeedSubscriptionType;
  exchangeToken?: number;
  consume: (callback: SubscriptionCallback) => void;
  unsubscribe: () => void;
}

export interface SubscriptionCallback {
  (data: LiveFeedCallbackData): void;
}
