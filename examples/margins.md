# GrowwAPI Margins Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to fetch margin details and calculate required margin for an order.

---

## 1. Get Margin Details

```typescript
const marginDetails = await groww.margins.details();
console.log('Margin Details:', marginDetails);
```

---

## 2. Calculate Margin Required for an Order

```typescript
const marginRequired = await groww.margins.requiredForOrder({
  tradingSymbol: 'RELIANCE',
  quantity: 10,
  price: 2800,
  validity: Validity.Day,
  exchange: Exchange.NSE,
  segment: Segment.CASH,
  product: Product.CNC,
  orderType: OrderType.Limit,
  transactionType: TransactionType.Buy,
});

console.log('Margin Required:', marginRequired);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).