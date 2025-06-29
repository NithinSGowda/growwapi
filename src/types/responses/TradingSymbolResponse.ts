export interface TradingSymbolResponse {
    carryForwardCreditPrice: number;
    carryForwardCreditQuantity: number;
    carryForwardDebitPrice: number;
    carryForwardDebitQuantity: number;
    creditPrice: number;
    creditQuantity: number;
    debitPrice: number;
    debitQuantity: number;
    exchange: string;
    netCarryForwardPrice: number;
    netCarryForwardQuantity: number;
    netPrice: number;
    product: string;
    quantity: number;
    segment: string;
    symbolIsin: string;
}
