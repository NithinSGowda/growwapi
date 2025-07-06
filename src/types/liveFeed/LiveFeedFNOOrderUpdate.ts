import { LiveFeedOrderUpdate, Product, Segment } from '..';

export interface LiveFeedFNOOrderUpdate extends LiveFeedOrderUpdate {
  price: number;
  product: Product;
  segment: Segment;
}
