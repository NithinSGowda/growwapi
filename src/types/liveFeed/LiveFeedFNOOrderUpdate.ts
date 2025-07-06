import { LiveFeedOrderUpdate } from '..';

export interface LiveFeedFNOOrderUpdate extends LiveFeedOrderUpdate {
  price: string;
  product: string;
  segment: string;
}
