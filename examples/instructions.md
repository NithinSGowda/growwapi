# GrowwAPI Instructions Example

This example demonstrates how to use the `GrowwAPI` NodeJS SDK to fetch instrument instructions and filter them.

---

## 1. Get All Instructions

```typescript
const data = await Groww.instructions.getInstructions();

console.log('Preview Content:', data.fileContent.slice(0, 1000));
```

---

## 2. Get Filtered Instructions

```typescript
const filtered = await Groww.instructions.getFilteredInstructions({
  exchangeToken: 2885,
});

console.log('Filtered Instructions:', filtered);
```

---

## Notes

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).