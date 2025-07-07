import { LiveFeedMarketDepth, LiveFeedOrderUpdate, LiveFeedPositionUpdate, LiveFeedPrice } from '..';

export type LiveFeedCallbackData = LiveFeedPrice | LiveFeedMarketDepth | LiveFeedOrderUpdate | LiveFeedPositionUpdate
