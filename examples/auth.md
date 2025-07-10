# Auth Example

This example shows how to use the `Auth` resource in `growwapi` for authentication and token management.

---

## 1. Generate Token

```typescript
    const token = await groww.Auth.generateToken();
    console.log('Access Token:', token.accessToken);
```

---

## 2. Refresh Token

```typescript
const refreshed = await groww.Auth.refreshToken();
console.log('Refreshed Token:', refreshed.accessToken);
```

---

## Tips

- Ensure you have initialized the SDK and set required environment variables.
- All methods are asynchronous and return strongly typed responses.
- For more details, refer to the [API documentation](../README.md).
