import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface StatusParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
}
