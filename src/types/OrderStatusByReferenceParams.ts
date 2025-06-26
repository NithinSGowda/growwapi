import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface OrderStatusByReferenceParams extends BaseParams {
    orderReferenceId: string;
    segment: Segment;
}
