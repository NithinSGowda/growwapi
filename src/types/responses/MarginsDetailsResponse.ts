import { EquityMarginDetailResponse } from './EquityMarginDetailResponse';
import { FNOMarginDetailResponse } from './FNOMarginDetailResponse';

export interface MarginsDetailsResponse {
    adhocMargin: number;
    brokerageAndCharges: number;
    clearCash: number;
    collateralAvailable: number;
    collateralUsed: number;
    equityMarginDetails: EquityMarginDetailResponse;
    fnoMarginDetails: FNOMarginDetailResponse;
    netMarginUsed: number;
}
