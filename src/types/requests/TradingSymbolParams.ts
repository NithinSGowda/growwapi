import { BaseParams } from '../BaseParams';
import { Exchange } from '../enums/Exchange';
import { Segment } from '../enums/Segment';

export interface TradingSymbolParams extends BaseParams {
    segment: Segment;
    tradingSymbol: string;
    exchange?: Exchange;
}
