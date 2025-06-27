import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface GetOrderParams extends BaseParams {
    segment: Segment;
    page: number;
    pageSize: number;
}
