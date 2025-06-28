import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface CancelOrderParams extends BaseParams{
    growwOrderId: string;
    segment: Segment;
    orderReferenceId?: string;
}
