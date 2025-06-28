import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface OrderStatusParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
}
