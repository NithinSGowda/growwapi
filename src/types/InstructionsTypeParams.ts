import { BaseParams } from './BaseParams';
import { Exchange } from './Exchange';
import { Segment } from './Segment';

export interface InstructionsTypeParams extends BaseParams {
    exchange?: Exchange;
    segment?: Segment;
    tradingSymbol?: string;
    growwSymbol?: string;
    name?: string;
    instrumentType?: string;
    series?: string;
    isin?: string;
    underlyingSymbol?: string;
    underlyingExchangeToken?: number;
    lotSize?: number;
    expiryDate?: string | number;
    strikePrice?: number;
    tickSize?: number;
    freezeQuantity?: number;
    isReserved?: boolean;
    buyAllowed?: boolean;
    sellAllowed?: boolean;
}
