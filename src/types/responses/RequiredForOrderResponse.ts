export interface RequiredForOrderResponse {
    status: string;
    exposure_required: number;
    span_required: number;
    option_buy_premium: number;
    brokerage_and_charges: number;
    total_requirement: number;
    cash_cnc_margin_required: number;
    cash_mis_margin_required: number;
    physical_delivery_margin_requirement?: number;
}
