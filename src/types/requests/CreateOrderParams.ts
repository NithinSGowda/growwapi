import { BaseParams } from '../BaseParams';
import { Exchange } from '../enums/Exchange';
import { OrderType } from '../enums/OrderType';
import { Product } from '../enums/Product';
import { Segment } from '../enums/Segment';
import { TransactionType } from '../enums/TransactionType';
import { Validity } from '../enums/Validity';

export interface CreateOrderParams extends BaseParams {
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
