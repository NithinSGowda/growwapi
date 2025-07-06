import { LiveFeedData } from '..';

export interface LiveFeedOrderUpdate extends LiveFeedData {
  averageFillPrice: number;
  contractId: string;
  duration: string;
  exchange: string;
  exchangeOrderId: string;
  filledQuantity: number;
  growwOrderId: string;
  orderStatus: string;
  quantity: number;
}
