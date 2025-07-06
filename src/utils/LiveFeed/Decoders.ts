import { LiveFeedMarketDepth, LiveFeedOrderUpdate, LiveFeedPositionUpdate, LiveFeedPrice } from '../../types';
import { LiveFeedFNOOrderUpdate } from '../../types/liveFeed/LiveFeedFNOOrderUpdate';
import { LiveFeedMarketDepthDecoder, LiveFeedOrderUpdatesDecoder, LiveFeedPositionOrderUpdatesDecoder, LiveFeedPriceDecoder } from '../Protobuffer/protobuffer';

export function PriceDecoder(data: Uint8Array): LiveFeedPrice {
  const decoded = LiveFeedPriceDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)) as LiveFeedPrice;
}

export function MarketDepthDecoder(data: Uint8Array): LiveFeedMarketDepth {
  const decoded = LiveFeedMarketDepthDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)) as LiveFeedMarketDepth;
}

export function EquityOrderUpdatesDecoder(data: Uint8Array): any {
  const decoded = LiveFeedOrderUpdatesDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)).orderDetailUpdateDto as LiveFeedOrderUpdate;
}

export function FNOOrderUpdatesDecoder(data: Uint8Array): any {
  const decoded = LiveFeedOrderUpdatesDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)).orderDetailUpdateDto as LiveFeedFNOOrderUpdate;
}

export function PositionOrderUpdatesDecoder(data: Uint8Array): any {
  const decoded = LiveFeedPositionOrderUpdatesDecoder.decode(data);
  return JSON.parse(JSON.stringify(decoded, null, 2)) as LiveFeedPositionUpdate;
}
