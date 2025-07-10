# GrowwAPI Order Management Examples

This document demonstrates how to use the `GrowwAPI` NodeJS SDK for various order management operations on Groww.  
**All examples assume you have initialized the SDK and set required environment variables.**

---

## 1. Create a New Order

```typescript
const createdOrder = await groww.orders.create({
  tradingSymbol: 'IDEA',
  quantity: 2,
  price: 5,
  triggerPrice: 4,
  validity: Validity.Day,
  exchange: Exchange.NSE,
  segment: Segment.CASH,
  product: Product.CNC,
  orderType: OrderType.Limit,
  transactionType: TransactionType.Buy,
  orderReferenceId: '00000001',
});

console.log('Order Created:', createdOrder);
```

---

## 2. Check Order Status by Groww Order ID

```typescript
const orderStatus = await groww.orders.status({
  growwOrderId: createdOrder.growwOrderId,
  segment: Segment.CASH,
});

console.log('Order Status:', orderStatus);
```

---

## 3. Get Trades for the Order

```typescript
const trades = await groww.orders.getTrades({
  growwOrderId: createdOrder.growwOrderId,
  segment: Segment.CASH,
  page: 1,
  pageSize: 5,
});

console.log('Order Trades:', trades);
```

---

## 4. Modify the Order

```typescript
const modifiedOrder = await groww.orders.modify({
  growwOrderId: createdOrder.growwOrderId,
  quantity: 1,
  price: 5,
  triggerPrice: 4,
  segment: Segment.CASH,
  orderType: OrderType.Limit,
});

console.log('Modified Order:', modifiedOrder);
```

---

## 5. Cancel the Order

```typescript
const cancelledOrder = await groww.orders.cancel({
  growwOrderId: createdOrder.growwOrderId,
  exchange: Exchange.NSE,
  segment: Segment.CASH,
});

console.log('Order Cancelled:', cancelledOrder);
```

---

## 6. Get Order Details

```typescript
const orderDetails = await groww.orders.details({
  growwOrderId: createdOrder.growwOrderId,
  segment: Segment.CASH,
});

console.log('Order Details:', orderDetails);
```

---

## 7. Check Order Status by Reference ID

```typescript
const refStatus = await groww.orders.statusByReference({
  orderReferenceId: orderDetails.orderReferenceId,
  segment: Segment.CASH,
});

console.log('Status by Reference:', refStatus);
```

---

## 8. List Recent Orders

```typescript
const ordersList = await groww.orders.getOrders({
  segment: Segment.CASH,
  page: 1,
  pageSize: 5,
});

console.log('Recent Orders:', ordersList);
```

---

## Notes

- All methods are asynchronous and return strongly typed responses.
- API errors include status code, response text, and descriptive messages.
- Ensure required environment variables are set before running these examples.
- For more details, refer to the [API documentation](../README.md).