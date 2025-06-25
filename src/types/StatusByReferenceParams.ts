import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface StatusByReferenceParams extends BaseParams {
    orderReferenceId: string;
    segment: Segment;
}
