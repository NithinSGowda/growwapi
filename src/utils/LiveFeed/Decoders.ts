import { LiveFeedMarketDepth, LiveFeedPrice } from '../../types';
import { LiveFeedMarketDepthDecoder, LiveFeedPriceDecoder } from '../Protobuffer/protobuffer';

export function PriceDecoder(data: Uint8Array): LiveFeedPrice {
  const decoded = LiveFeedPriceDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)) as LiveFeedPrice;
}

export function MarketDepthDecoder(data: Uint8Array): LiveFeedMarketDepth {
  const decoded = LiveFeedMarketDepthDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)) as LiveFeedMarketDepth;
}

export function equityOrderUpdatesDecoder(data: Uint8Array): any {
  console.log(data);
}
