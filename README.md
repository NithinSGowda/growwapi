# growwapi

NodeJS SDK for Groww trading APIs

![npm version](https://img.shields.io/npm/v/growwapi?style=for-the-badge&label=Version)
![GitHub last commit](https://img.shields.io/github/last-commit/nithinsgowda/growwapi?style=for-the-badge&label=Last%20Commit)

![downloads](https://img.shields.io/npm/dy/growwapi?style=for-the-badge&label=Downloads)
![GitHub issues](https://img.shields.io/github/issues/nithinsgowda/growwapi?style=for-the-badge&label=Issues)
![license](https://img.shields.io/npm/l/growwapi?style=for-the-badge&label=License)

## 📝 Overview

growwapi is a NodeJS SDK for Groww trading APIs. The library provides functionality for trading on Groww including holdings management, margin calculations, order management, and position tracking.

---

## 🚀 Features

- **Authentication**: Secure API access with API key and TOTP
- **Live Feed**: Real-time data streaming for market prices
- **Historic Data**: Access to historical market data
- **Holdings**: Fetch user portfolio holdings
- **Instructions**: CSV-based instrument details
- **Live Data**: Current market data access
- **Margins**: Retrieve margin details and calculate margins required for orders
- **Orders**: Create, modify, cancel, and fetch order details
- **Positions**: Fetch user positions and trading symbol details

---

## ⚙️ Installation

```bash
npm install growwapi
```

---

## ⚡ Quick Start

### 1. Environment Setup

Create a `.env` file in your project root:

```env
GROWW_API_KEY=your_api_key
GROWW_API_SECRET=your_api_secret
```

Optional:
```env
GROWW_API_BASE_URL=
GROWW_API_VERSION=
GROWW_FILECACHE_TTL=
```

### 2. Basic Usage

```typescript
import { GrowwAPI } from 'growwapi';

const client = new GrowwAPI();
```

### 3. Live Feed Example

```typescript
import { GrowwAPI } from 'growwapi';

const client = new GrowwAPI();
const liveFeed = client.liveFeed;

await liveFeed.connect(handleData);

const subscription1 = liveFeed.subscribe(11195);
const subscription2 = liveFeed.subscribe(10999);

await liveFeed.consume(subscription1);
await liveFeed.consume(subscription2);

function handleData(data: LiveFeedPrice) {
  console.log(data);
}
```

### 4. Trading Example

```typescript
import { GrowwAPI } from 'growwapi';
import { Exchange, OrderType, Product, Segment, TransactionType, Validity } from 'growwapi';

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

---

## 📚 API Reference

### Authentication
- `Auth.generateToken()` – Generates a new authentication token.
- `Auth.refreshToken()` – Refreshes the current authentication token.

### Live Feed & Data
- `LiveFeed.connect(callback)` – Establishes a WebSocket connection for real-time data.
- `LiveFeed.subscribe(instrumentId)` – Subscribes to real-time data for a specific instrument.
- `LiveFeed.consume(subscription)` – Starts consuming data from a subscription.
- `LiveFeed.disconnect()` – Disconnects from the WebSocket.
- `HistoricData.get(params)` – Fetches historical market data.
- `LiveData.get(params)` – Fetches current market data for specified instruments.

### Instruments & Instructions
- `Instructions.getInstructions()` – Fetches the full instructions CSV file.
- `Instructions.getFilteredInstructions(params)` – Fetches filtered instructions based on provided parameters.

### Portfolio & Trading
#### Holdings
- `Holdings.list()` – Fetches user holdings.

#### Margins
- `Margins.details()` – Fetches margin details for the user.
- `Margins.requiredForOrder(params)` – Calculates margins required for an order.

#### Orders
- `Orders.create(params)` – Creates a new order.
- `Orders.modify(params)` – Modifies an existing order.
- `Orders.cancel(params)` – Cancels an order.
- `Orders.getTrades(params)` – Fetches trade details for an order.
- `Orders.status(params)` – Fetches the status of an order.
- `Orders.statusByReference(params)` – Fetches the status of an order by reference ID.
- `Orders.getOrders(params)` – Lists all orders.
- `Orders.details(params)` – Fetches details of an order.

#### Positions
- `Positions.user(params)` – Fetches user positions.
- `Positions.tradingSymbol(params)` – Fetches details of a trading symbol.

---

## 🛠️ Development

### Scripts
- `npm run build`: Builds the project.
- `npm run dev`: Runs the project in development mode.
- `npm run test`: Runs tests.
- `npm run lint`: Lints the code.
- `npm generate-exports`: Generates exports for all types.

### Testing
```bash
npm run test
```

### Linting
```bash
npm run lint
```

---

## 🏗️ Architecture

- **GrowwAPI**: Main class that initializes and provides access to all service modules
- **Resources**: Independent modules for different API functionalities:
  - Auth, LiveFeed, HistoricData, Holdings, Instructions, LiveData, Margins, Orders, Positions

---

## 🤝 Contributing

- Maintain strong typing for all methods and parameters
- Follow resource-based module organization
- Use camelCase for variables and methods
- Document all public methods and parameters
- Handle API errors consistently with descriptive messages
- Validate environmental dependencies before API calls
- Follow the established pattern for new resource modules

---

## 📄 License

This project is licensed under the Apache License 2.0. See the [`LICENSE`](LICENSE) file for details.
