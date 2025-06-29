import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface GetOHLCParams extends BaseParams {
    exchangeSymbols: string[];
    segment: Segment;
}
