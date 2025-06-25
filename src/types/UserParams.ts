import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface UserParams extends BaseParams {
    segment: Segment;
}
