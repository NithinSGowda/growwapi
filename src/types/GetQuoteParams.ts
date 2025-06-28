import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { Segment } from './Segment';

export interface GetQuoteParams extends BaseParams {
    segment: Segment;
    exchange: Exchange;
    tradingSymbol: string;
}
