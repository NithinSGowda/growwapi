import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface OrderStatusByReferenceParams extends BaseParams {
    orderReferenceId: string;
    segment: Segment;
}
