import { BaseParams } from '../BaseParams';
import { Exchange } from '../enums/Exchange';
import { Segment } from '../enums/Segment';

export interface GetQuoteParams extends BaseParams {
    exchange: Exchange;
    segment: Segment;
    tradingSymbol: string;
}
