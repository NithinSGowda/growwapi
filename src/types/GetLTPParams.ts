import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface GetLTPParams extends BaseParams {
    segment: Segment;
    exchangeSymbols: string;
}
