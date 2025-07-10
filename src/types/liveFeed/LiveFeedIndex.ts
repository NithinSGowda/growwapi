import { LiveFeedData } from '..';

export interface LiveFeedIndex extends LiveFeedData {
  indexData: {
    timestamp: number;
    value: number;
  }
}
