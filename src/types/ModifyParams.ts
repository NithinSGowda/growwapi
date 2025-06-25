import { BaseParams } from './BaseParams';
import { OrderType } from './OrderType';
import { Segment } from './Segment';

export interface ModifyParams extends BaseParams {
    quantity: number;
    price?: number;
    triggerPrice?: number;
    orderType: OrderType;
    segment: Segment;
    growwOrderId: string;
}
