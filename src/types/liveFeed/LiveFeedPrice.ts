import { LiveFeedData } from '..';

export interface LiveFeedPrice extends LiveFeedData {
  priceData: {
    timestamp: number;
    price: number;
  }
}
