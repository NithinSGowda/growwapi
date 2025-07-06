import { LiveFeedData } from '..';

export interface LiveFeedOrderUpdate extends LiveFeedData {
  avgFillPrice: string;
  contractId: string;
  duration: string;
  exchange: string;
  exchangeOrderId: string;
  filledQty: number;
  growwOrderId: string;
  orderStatus: string;
  qty: number;
}
