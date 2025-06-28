interface LiveFeedData {
  symbol: string;
  isActive?: boolean;
}

export interface LiveFeedPrice extends LiveFeedData {
  priceData: {
    timestamp: number;
    price: number;
  }
}
