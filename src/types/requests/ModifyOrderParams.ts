import { BaseParams } from '../BaseParams';
import { OrderType } from '../enums/OrderType';
import { Segment } from '../enums/Segment';

export interface ModifyOrderParams extends BaseParams {
    growwOrderId: string;
    orderType: OrderType;
    quantity: number;
    segment: Segment;
    price?: number;
    triggerPrice?: number;
}
