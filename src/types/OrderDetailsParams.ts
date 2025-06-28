import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface OrderDetailsParams extends BaseParams {
    segment: Segment;
    growwOrderId: string;
}
