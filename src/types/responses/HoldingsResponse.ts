export interface HoldingsResponse {
    isin: string;
    trading_symbol: string;
    quantity: number;
    average_price: number;
    pledge_quantity: number;
    demat_locked_quantity: number;
    groww_locked_quantity: number;
    repledge_quantity: number;
    t1_quantity: number;
    demat_free_quantity: number;
    corporate_action_additional_quantity: number;
    active_demat_transfer_quantity: number;
}
