import { LiveFeedData } from '..';

interface Depth {
  offset: number;
  price: Price;
}

interface Price {
  price: number;
  volume: number;
}

export interface LiveFeedMarketDepth extends LiveFeedData {
  marketDepth: {
    buyBook: Depth[];
    sellBook: Depth[];
  }
}
