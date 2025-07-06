import { LiveFeedData } from '..';

export interface ExchangePosition {
  creditQuantity?: number;
  creditPrice?: number;
  debitQuantity?: number;
  debitPrice?: number;
}

export interface LiveFeedPositionUpdate extends LiveFeedData {
  symbolIsin: string;
  exchangePosition: {
    BSE: ExchangePosition;
    NSE: ExchangePosition;
  }
}
