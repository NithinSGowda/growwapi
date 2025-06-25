import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface CancelParams extends BaseParams{
    growwOrderId: string;
    segment: Segment;
    orderReferenceId?: string;
}
