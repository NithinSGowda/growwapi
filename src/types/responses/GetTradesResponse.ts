export interface GetTradesResponse {
    createdAt: string;
    exchange: string;
    exchangeOrderId: string;
    exchangeTradeId: string;
    growwOrderId: string;
    growwTradeId: string;
    isin: string;
    price: number;
    product: string;
    quantity: number;
    remark: string;
    segment: string;
    settlementNumber: string;
    tradeDateTime: string;
    tradeStatus: string;
    tradingSymbol: string;
    transactionType: string;
}
