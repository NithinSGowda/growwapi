# GrowwAPI Live Feed Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to subscribe to real-time data streams.

---

## 1. Connect to Live Feed

```typescript
await liveFeed.connect();
```

---

## 2. Subscribe to Live Feed Channels

```typescript
function handleData(data: LiveFeedCallback) {
  console.log(data);
}

const equityOrderUpdatesSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.EquityOrderUpdates);
const fnoOrderUpdatesSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.FnoOrderUpdates);
const fnoPositionUpdatesSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.FnoPositionUpdates);
const priceSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.Price, 2885);
const marketDepthSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.MarketDepth, 2885);
```

---

## 3. Consume Live Feed Data

```typescript
if (equityOrderUpdatesSubscription) liveFeed.consume(equityOrderUpdatesSubscription, handleData);
if (fnoOrderUpdatesSubscription) liveFeed.consume(fnoOrderUpdatesSubscription, handleData);
if (fnoPositionUpdatesSubscription) liveFeed.consume(fnoPositionUpdatesSubscription, handleData);
if (priceSubscription) liveFeed.consume(priceSubscription, handleData);
if (marketDepthSubscription) liveFeed.consume(marketDepthSubscription, handleData);
```

---

## 4. Unsubscribe from Channels

```typescript
if (equityOrderUpdatesSubscription) liveFeed.unsubscribe(equityOrderUpdatesSubscription);
if (fnoOrderUpdatesSubscription) liveFeed.unsubscribe(fnoOrderUpdatesSubscription);
if (fnoPositionUpdatesSubscription) liveFeed.unsubscribe(fnoPositionUpdatesSubscription);
if (priceSubscription) liveFeed.unsubscribe(priceSubscription);
if (marketDepthSubscription) liveFeed.unsubscribe(marketDepthSubscription);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).