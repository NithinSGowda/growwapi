import { OHLCResponse } from './OHLCResponse';
import { OrderDepth } from './OrderDepth';

export interface GetQuoteResponse {
    averagePrice: number;
    bidPrice: number;
    bidQuantity: number;
    depth: {
        buy: OrderDepth[];
        sell: OrderDepth[];
    };
    dayChange: number;
    dayChangePerc: number;
    highTradeRange: number;
    impliedVolatility: number;
    lastPrice: number;
    lastTradeQuantity: number;
    lastTradeTime: number;
    lowTradeRange: number;
    lowerCircuitLimit: number;
    marketCap: number;
    offerPrice: number;
    offerQuantity: number;
    ohlc: OHLCResponse;
    oiDayChange: number;
    oiDayChangePercentage: number;
    openInterest: number;
    previousOpenInterest: number;
    totalBuyQuantity: number;
    totalSellQuantity: number;
    upperCircuitLimit: number;
    volume: number;
    week52High: number;
    week52Low: number;
}
