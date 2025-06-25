import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { OrderType } from './OrderType';
import { Product } from './Product';
import { Segment } from './Segment';
import { TransactionType } from './TransactionType';
import { Validity } from './Validity';

export interface CreateParams extends BaseParams {
    exchange: Exchange;
    orderType: OrderType;
    product: Product;
    quantity: number;
    segment: Segment;
    tradingSymbol: string;
    transactionType: TransactionType;
    validity: Validity;
    orderReferenceId?: string;
    price?: number;
    triggerPrice?: number;
}
