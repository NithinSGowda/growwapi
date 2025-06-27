export interface UserPositionsResponse {
    status: string;
    trading_symbol: string;
    segment: string;
    credit_quantity: number;
    credit_price: number;
    debit_quantity: number;
    debit_price: number;
    carry_forward_credit_quantity: number;
    carry_forward_credit_price: number;
    carry_forward_debit_quantity: number;
    carry_forward_debit_price: number;
    exchange: string;
    symbol_isin: string;
    quantity: number;
    product: string;
    net_carry_forward_quantity: number;
    net_price: number;
    net_carry_forward_price: number;
}
