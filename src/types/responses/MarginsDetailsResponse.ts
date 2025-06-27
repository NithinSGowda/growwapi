import { EquityMarginDetailResponse } from './EquityMarginDetailResponse';
import { FNOMarginDetailResponse } from './FNOMarginDetailResponse';

export interface MarginsDetailsResponse {
    clear_cash: number;
    net_margin_used: number;
    brokerage_and_charges: number;
    collateral_used: number;
    collateral_available: number;
    adhoc_margin: number;
    fno_margin_details: FNOMarginDetailResponse;
    equity_margin_details: EquityMarginDetailResponse;
}
