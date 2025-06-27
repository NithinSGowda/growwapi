import { BaseParams } from './BaseParams';
import { Segment } from './Segment';

export interface GetOHLCParams extends BaseParams {
    segment: Segment;
    exchangeSymbols: string[];
}
