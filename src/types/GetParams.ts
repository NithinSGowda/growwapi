import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface GetParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
}
