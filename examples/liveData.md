# GrowwAPI Live Data Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to fetch live market data for symbols.

---

## 1. Get Quote for a Symbol

```typescript
const quote = await groww.liveData.getQuote({
  exchange: Exchange.NSE,
  segment: Segment.CASH,
  tradingSymbol: 'RELIANCE',
});

console.log('Quote:', quote);
```

---

## 2. Get LTP for Multiple Symbols

```typescript
const ltp = await groww.liveData.getLTP({
  segment: Segment.CASH,
  exchangeSymbols: ['NSE_RELIANCE', 'NSE_TCS', 'NSE_WIPRO'],
});

console.log('LTP:', ltp);
```

---

## 3. Get OHLC for Multiple Symbols

```typescript
const ohlc = await groww.liveData.getOHLC({
  segment: Segment.CASH,
  exchangeSymbols: ['NSE_RELIANCE', 'NSE_TCS', 'NSE_WIPRO'],
});

console.log('OHLC:', ohlc);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).