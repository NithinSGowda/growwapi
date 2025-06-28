import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface ListOrderParams extends BaseParams {
    segment: Segment;
    page: number;
    pageSize: number;
}
