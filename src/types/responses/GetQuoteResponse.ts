import { OHLCResponse } from './OHLCResponse';
import { OrderDepth } from './OrderDepth';

export interface GetQuoteResponse {
    average_price: number;
    bid_quantity: number;
    bid_price: number;
    day_change: number;
    day_change_perc: number;
    upper_circuit_limit: number;
    lower_circuit_limit: number;
    ohlc: OHLCResponse;
    depth: {
        buy: OrderDepth[];
        sell: OrderDepth[];
    };
    high_trade_range: number;
    implied_volatility: number;
    last_trade_quantity: number;
    last_trade_time: number;
    low_trade_range: number;
    last_price: number;
    market_cap: number;
    offer_price: number;
    offer_quantity: number;
    oi_day_change: number;
    oi_day_change_percentage: number;
    open_interest: number;
    previous_open_interest: number;
    total_buy_quantity: number;
    total_sell_quantity: number;
    volume: number;
    week_52_high: number;
    week_52_low: number;
}
