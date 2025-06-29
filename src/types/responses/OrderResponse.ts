export interface OrderResponse {
    amoStatus: string;
    averageFillPrice: number;
    createdAt: string;
    deliverableQuantity: number;
    exchange: string;
    exchangeTime: string;
    filledQuantity: number;
    growwOrderId: string;
    orderReferenceId: string;
    orderStatus: string;
    orderType: string;
    price: number;
    product: string;
    quantity: number;
    remainingQuantity: number;
    remark: string;
    segment: string;
    tradeDate: string;
    tradingSymbol: string;
    transactionType: string;
    triggerPrice: number;
    validity: string;
}
