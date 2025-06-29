import { BaseParams } from '../BaseParams';
import { Segment } from '../enums/Segment';

export interface GetLTPParams extends BaseParams {
    exchangeSymbols: string[];
    segment: Segment;
}
