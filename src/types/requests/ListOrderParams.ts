import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface ListOrderParams extends BaseParams {
    page: number;
    pageSize: number;
    segment: Segment;
}
