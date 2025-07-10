import { InstructionsTypeParams, LiveFeedSubscriptionType, Segment } from '../../types';

export function subscriptionSegmentParser(segment: Segment | undefined): string {
  switch (segment) {
  case Segment.CASH:
    return 'eq';
  case Segment.FNO:
    return 'fo';
  default:
    return 'eq';
  }
}

export function subscriptionTypeParser(type: LiveFeedSubscriptionType): string {
  switch (type) {
  case LiveFeedSubscriptionType.Price:
    return 'price';
  case LiveFeedSubscriptionType.Index:
    return 'indices';
  case LiveFeedSubscriptionType.MarketDepth:
    return 'book';
  default:
    throw new Error(`Unknown subscription type: ${type}`);
  }
}

export function liveUpdatesParser(type: string, subscriptionId: string): string {
  switch (type) {
  case LiveFeedSubscriptionType.FnoOrderUpdates:
    return `stocks_fo/order/updates.apex.${subscriptionId}`;
  case LiveFeedSubscriptionType.FnoPositionUpdates:
    return `stocks_fo/position/updates.apex.${subscriptionId}`;
  case LiveFeedSubscriptionType.EquityOrderUpdates:
    return `stocks/order/updates.apex.${subscriptionId}`;
  default:
    throw new Error(`Unknown subscription type: ${type}`);
  }
}

export function liveIndexParser(type: LiveFeedSubscriptionType, instruction: InstructionsTypeParams): string {
  const exchange = instruction.exchange?.toLowerCase();
  const token = instruction.exchangeToken;
  const typeString = subscriptionTypeParser(type);

  return `/ld/${typeString}/${exchange}/price.${token}`;
}

export function liveMarketParser(type: LiveFeedSubscriptionType, instruction: InstructionsTypeParams): string {
  const segment = subscriptionSegmentParser(instruction.segment);
  const exchange = instruction.exchange?.toLowerCase();
  const token = instruction.exchangeToken;
  const typeString = subscriptionTypeParser(type);

  return `/ld/${segment}/${exchange}/${typeString}.${token}`;
}
