export interface GetOrderResponse {
    groww_order_id: string;
    trading_symbol: string;
    order_status: string;
    remark: string;
    quantity: number;
    price: number;
    trigger_price: number;
    filled_quantity: number;
    remaining_quantity: number;
    average_fill_price: number;
    deliverable_quantity: number;
    amo_status: string;
    validity: string;
    exchange: string;
    order_type: string;
    transaction_type: string;
    segment: string;
    product: string;
    created_at: string;
    exchange_time: string;
    trade_date: string;
    order_reference_id: string;
    }
