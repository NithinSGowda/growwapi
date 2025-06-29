export interface RequiredForOrderResponse {
    brokerageAndCharges: number;
    cashCncMarginRequired: number;
    cashMisMarginRequired: number;
    exposureRequired: number;
    optionBuyPremium: number;
    spanRequired: number;
    status: string;
    totalRequirement: number;
    physicalDeliveryMarginRequirement?: number;
}
