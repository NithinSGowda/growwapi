export interface ExchangePosition {
  creditQuantity?: number;
  creditPrice?: number;
  debitQuantity?: number;
  debitPrice?: number;
}

export interface LiveFeedPositionUpdate{
  symbolIsin: string;
  exchangePosition: {
    BSE: ExchangePosition;
    NSE: ExchangePosition;
  }
}
