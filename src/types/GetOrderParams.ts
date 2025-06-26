import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface GetOrderParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
}
