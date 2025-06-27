import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface DetailsOrderParams extends BaseParams {
    segment: Segment;
    growwOrderId: string;
}
