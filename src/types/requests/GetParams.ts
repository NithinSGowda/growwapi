import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface GetParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
}
