import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface GetLTParams extends BaseParams {
    exchangeSymbols: string[];
    segment: Segment;
}
