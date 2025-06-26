import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface OrderStatusParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
}
