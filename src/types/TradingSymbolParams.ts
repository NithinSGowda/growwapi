import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { Segment } from './Segment';

export interface TradingSymbolParams extends BaseParams {
    segment: Segment;
    tradingSymbol: string;
    exchange?: Exchange;
}
