import { LiveFeedFNOOrderUpdate, LiveFeedMarketDepth, LiveFeedOrderUpdate, LiveFeedPositionUpdate, LiveFeedPrice } from '..';

export type LiveFeedCallbackData = LiveFeedPrice | LiveFeedMarketDepth | LiveFeedFNOOrderUpdate | LiveFeedOrderUpdate | LiveFeedPositionUpdate
