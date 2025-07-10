import { LiveFeedMarketDepth, LiveFeedOrderUpdate, LiveFeedPositionUpdate, LiveFeedPrice } from '../../types';
import { LiveFeedIndex } from '../../types/liveFeed/LiveFeedIndex';
import {
  LiveFeedMarketDepthDecoder,
  LiveFeedOrderUpdatesDecoder,
  LiveFeedPositionOrderUpdatesDecoder,
  LiveFeedPriceDecoder
} from '../Protobuffer/protobuffer';

const toObjectOptions = { longs: Number, enums: String, defaults: true, arrays: true, objects: true };

export function PriceDecoder(data: Uint8Array): LiveFeedPrice {
  const decoded = LiveFeedPriceDecoder.decode(data);
  return LiveFeedPriceDecoder.toObject(decoded, toObjectOptions) as LiveFeedPrice;
}

export function IndexDecoder(data: Uint8Array): LiveFeedIndex {
  const decoded = LiveFeedPriceDecoder.decode(data);
  return LiveFeedPriceDecoder.toObject(decoded, toObjectOptions) as LiveFeedIndex;
}

export function MarketDepthDecoder(data: Uint8Array): LiveFeedMarketDepth {
  const decoded = LiveFeedMarketDepthDecoder.decode(data);
  return LiveFeedMarketDepthDecoder.toObject(decoded, toObjectOptions) as LiveFeedMarketDepth;
}

export function EquityOrderUpdatesDecoder(data: Uint8Array): LiveFeedOrderUpdate {
  const decoded = LiveFeedOrderUpdatesDecoder.decode(data);
  const obj = LiveFeedOrderUpdatesDecoder.toObject(decoded, toObjectOptions);
  return obj.orderDetailUpdateDto as LiveFeedOrderUpdate;
}

export function FNOOrderUpdatesDecoder(data: Uint8Array): LiveFeedOrderUpdate {
  const decoded = LiveFeedOrderUpdatesDecoder.decode(data);
  const obj = LiveFeedOrderUpdatesDecoder.toObject(decoded, toObjectOptions);
  return obj.orderDetailUpdateDto as LiveFeedOrderUpdate;
}

export function PositionOrderUpdatesDecoder(data: Uint8Array): LiveFeedPositionUpdate {
  const decoded = LiveFeedPositionOrderUpdatesDecoder.decode(data);
  return LiveFeedPositionOrderUpdatesDecoder.toObject(decoded, toObjectOptions).positionInfo as LiveFeedPositionUpdate;
}
