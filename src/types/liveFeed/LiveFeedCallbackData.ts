import { LiveFeedIndex, LiveFeedMarketDepth, LiveFeedOrderUpdate, LiveFeedPositionUpdate, LiveFeedPrice } from '..';

export type LiveFeedCallbackData = LiveFeedPrice | LiveFeedMarketDepth | LiveFeedIndex | LiveFeedOrderUpdate | LiveFeedPositionUpdate
