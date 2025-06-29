import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface UserParams extends BaseParams {
    segment: Segment;
}
