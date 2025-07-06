# GrowwAPI Holdings Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to fetch your current portfolio holdings.

---

## 1. List Holdings

```typescript
const holdings = await Groww.holdings.list();
console.log('Holdings:', holdings);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).