export interface GetTradesResponse {
    price: number;
    isin: string;
    quantity: number;
    groww_order_id: string;
    groww_trade_id: string;
    exchange_trade_id: string;
    exchange_order_id: string;
    trade_status: string;
    trading_symbol: string;
    remark: string;
    exchange: string;
    segment: string;
    product: string;
    transaction_type: string;
    created_at: string;
    trade_date_time: string;
    settlement_number: string;
}
