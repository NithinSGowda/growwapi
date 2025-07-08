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
const equityOrderUpdatesSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.EquityOrderUpdates);
const fnoOrderUpdatesSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.FnoOrderUpdates);
const fnoPositionUpdatesSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.FnoPositionUpdates);
const priceSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.Price, 2885);
const marketDepthSubscription = await liveFeed.subscribe(LiveFeedSubscriptionType.MarketDepth, 2885);
```

---

## 3. Consume Live Feed Data

```typescript
function handleData(data: LiveFeedCallback) {
  console.log(data);
}

equityOrderUpdatesSubscription?.consume(handleData);
// Similarly
fnoOrderUpdatesSubscription?.consume(handleData);
fnoPositionUpdatesSubscription?.consume(handleData);
priceSubscription?.consume(handleData);
marketDepthSubscription?.consume(handleData);
```

---

## 4. Unsubscribe from Channels

```typescript
equityOrderUpdatesSubscription?.unsubscribe();
fnoOrderUpdatesSubscription?.unsubscribe();
fnoPositionUpdatesSubscription?.unsubscribe();
priceSubscription?.unsubscribe();
marketDepthSubscription?.unsubscribe();
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).