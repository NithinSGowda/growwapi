# GrowwAPI Positions Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to fetch margin details and required margin for a position.

---

## 1. Get Margin Details

```typescript
const marginDetails = await Groww.margins.details();
console.log('Margin Details:', marginDetails);
```

---

## 2. Calculate Required Margin for a Position

```typescript
const required = await Groww.margins.requiredForOrder({
  tradingSymbol: 'WIPRO',
  quantity: 5,
  price: 450,
  validity: Validity.Day,
  exchange: Exchange.NSE,
  segment: Segment.CASH,
  product: Product.CNC,
  orderType: OrderType.Limit,
  transactionType: TransactionType.Buy,
});

console.log('Required Margin:', required);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).