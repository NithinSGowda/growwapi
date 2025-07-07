import { Product } from '../enums/Product';
import { Segment } from '../enums/Segment';

export interface LiveFeedOrderUpdate{
  averageFillPrice: number;
  contractId: string;
  duration: string;
  exchange: string;
  exchangeOrderId: string;
  filledQuantity: number;
  growwOrderId: string;
  orderStatus: string;
  quantity: number;
  price: number;
  product: Product;
  segment: Segment;
  triggerPrice: number;
  remainingQuantity: number;
  orderType: string;
  buySell: string;
  remark: string;
  guiOrderId: string;
}
