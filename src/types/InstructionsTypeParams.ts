import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { Segment } from './Segment';

export interface InstructionsTypeParams extends BaseParams {
    exchange?: Exchange;
    exchangeToken?: number;
    tradingSymbol?: string;
    segment?: Segment;
    growwSymbol?: string;
    name?: string;
    instrumentType?: string;
    series?: string;
    isin?: string;
    underlyingSymbol?: string;
    underlyingExchangeToken?: number;
    expiryDate?: string | number;
    strikePrice?: number;
    lotSize?: number;
    tickSize?: number;
    freezeQuantity?: number;
    isReserved?: boolean;
    buyAllowed?: boolean;
    sellAllowed?: boolean;
}
