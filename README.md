# growwapi

NodeJS SDK for Groww trading APIs

![npm version](https://img.shields.io/npm/v/growwapi?style=for-the-badge&label=Version)
![GitHub last commit](https://img.shields.io/github/last-commit/nithinsgowda/growwapi?style=for-the-badge&label=Last%20Commit)

![downloads](https://img.shields.io/npm/dy/growwapi?style=for-the-badge&label=Downloads)
![GitHub issues](https://img.shields.io/github/issues/nithinsgowda/growwapi?style=for-the-badge&label=Issues)
![license](https://img.shields.io/npm/l/growwapi?style=for-the-badge&label=License)

## Features

- **Live Feed**: Real-time data streaming for market prices.
- **Holdings**: Fetch user holdings.
- **Margins**: Retrieve margin details and calculate margins required for orders.
- **Orders**: Create, modify, cancel, and fetch order details.
- **Positions**: Fetch user positions and trading symbol details.

## Installation

Install the package using npm:

```bash
npm install growwapi
```

## Usage

### Live Feed

```typescript
import { GrowwAPI } from 'growwapi';

const client = new GrowwAPI();
const liveFeed = client.liveFeed;

await liveFeed.connect(handleData);

// Subscribe to live feed for specific instruments
const subscription1 = liveFeed.subscribe(11195);
const subscription2 = liveFeed.subscribe(10999);

await liveFeed.consume(subscription1);
await liveFeed.consume(subscription2);

function handleData(data: LiveFeedPrice) {
  console.log(data);
}
```

### Setup

Create a `.env` file in your project root and add the following environment variables:

```env
GROWW_API_KEY=your_api_key
GROWW_API_SECRET=your_api_secret
```

### Example

```typescript
import { GrowwAPI } from 'growwapi';

const client = new GrowwAPI();

// Fetch user holdings
const holdings = await client.holdings.list();
console.log(holdings);

// Create an order
client.orders.create({
  exchange: Exchange.NSE,
  orderType: OrderType.Limit,
  product: Product.CNC,
  quantity: 10,
  segment: Segment.Cash,
  tradingSymbol: 'RELIANCE',
  transactionType: TransactionType.Buy,
  validity: Validity.Day,
  price: 2500,
}).then(console.log).catch(console.error);
```

## API Reference

### Holdings

#### `Holdings.list()`
Fetches user holdings.

### Margins

#### `Margins.details()`
Fetches margin details for the user.

#### `Margins.requiredForOrder(params: RequiredForOrderParams)`
Calculates margins required for an order.

**Parameters:**
- `params: RequiredForOrderParams` - The parameters for margin calculation.

### Orders

#### `Orders.create(params: CreateOrderParams)`
Creates a new order.

**Parameters:**
- `params: CreateOrderParams` - The parameters for creating an order.

#### `Orders.modify(params: ModifyOrderParams)`
Modifies an existing order.

**Parameters:**
- `params: ModifyOrderParams` - The parameters for modifying an order.

#### `Orders.cancel(params: CancelOrderParams)`
Cancels an order.

**Parameters:**
- `params: CancelOrderParams` - The parameters for canceling an order.

#### `Orders.getTrades(params: GetTradesParams)`
Fetches trade details for an order.

**Parameters:**
- `params: GetTradesParams` - The parameters for fetching trade details.

#### `Orders.status(params: OrderStatusParams)`
Fetches the status of an order.

**Parameters:**
- `params: OrderStatusParams` - The parameters for fetching order status.

#### `Orders.statusByReferenceID(params: OrderStatusByReferenceParams)`
Fetches the status of an order by reference ID.

**Parameters:**
- `params: OrderStatusByReferenceParams` - The parameters for fetching order status by reference ID.

#### `Orders.list(params: ListOrderParams)`
Lists all orders.

**Parameters:**
- `params: ListOrderParams` - The parameters for listing orders.

#### `Orders.get(params: GetOrderParams)`
Fetches details of an order.

**Parameters:**
- `params: GetOrderParams` - The parameters for fetching order details.

### Positions

#### `Positions.user(params: UserParams)`
Fetches user positions.

**Parameters:**
- `params: UserParams` - The parameters for fetching user positions.

#### `Positions.tradingSymbol(params: TradingSymbolParams)`
Fetches details of a trading symbol.

**Parameters:**
- `params: TradingSymbolParams` - The parameters for fetching trading symbol details.

## Development

### Scripts

- `npm run build`: Builds the project.
- `npm run dev`: Runs the project in development mode.
- `npm run test`: Runs tests.
- `npm run lint`: Lints the code.

### Testing

Run tests using:

```bash
npm run test
```

### Linting

Lint the code using:

```bash
npm run lint
```

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
