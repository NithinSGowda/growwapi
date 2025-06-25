import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { OrderType } from './OrderType';
import { Product } from './Product';
import { Segment } from './Segment';
import { TransactionType } from './TransactionType';

export interface RequiredForOrderParams extends BaseParams {
    segment: Segment;
    tradingSymbol: string;
    quantity: number;
    price?: number;
    exchange: Exchange;
    product: Product;
    orderType: OrderType;
    transactionType: TransactionType;
}
