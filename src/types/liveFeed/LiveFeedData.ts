import { Exchange } from '../enums/Exchange';
import { Segment } from '../enums/Segment';

export interface LiveFeedData {
  symbol: string;
  segment: Segment;
  exchange: Exchange;
}
