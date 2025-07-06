import { LiveFeedData } from '..';

export interface LiveFeedPositionUpdate extends LiveFeedData {
  symbolIsin: string;
  exchangePosition: {
    [exchange: string]: {
      creditQty?: number;
      creditPrice?: number;
      debitQty?: number;
      debitPrice?: number;
    };
  };
}
