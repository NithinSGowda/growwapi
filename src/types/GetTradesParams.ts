import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface GetTradesParams extends BaseParams {
    growwOrderId: string;
    segment: Segment;
    page?: number;
    pageSize?: number;
}
