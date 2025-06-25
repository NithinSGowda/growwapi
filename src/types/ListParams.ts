import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface ListParams extends BaseParams {
    segment: Segment;
    page: number;
    pageSize: number;
}
