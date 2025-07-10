# GrowwAPI Historic Data Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to fetch historical candle data for a symbol.

---

## 1. Fetch Historic Candle Data

```typescript
const endDate = new Date(); // Now
const startDate = new Date();
startDate.setMonth(startDate.getMonth() - 2); // 2 months ago

const startTime = startDate.getTime();
const endTime = endDate.getTime();

const data = await groww.historicData.get({
  exchange: Exchange.NSE,
  segment: Segment.CASH,
  tradingSymbol: 'RELIANCE',
  startTime,
  endTime
});

console.log('Historic Candle Data:', data);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).