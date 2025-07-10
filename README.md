# growwapi

NodeJS SDK for Groww trading APIs

![npm version](https://img.shields.io/npm/v/growwapi?style=for-the-badge&label=Version)
![GitHub last commit](https://img.shields.io/github/last-commit/nithinsgowda/growwapi?style=for-the-badge&label=Last%20Commit)

![downloads](https://img.shields.io/npm/dy/growwapi?style=for-the-badge&label=Downloads)
![GitHub issues](https://img.shields.io/github/issues/nithinsgowda/growwapi?style=for-the-badge&label=Issues)

![CI Status](https://img.shields.io/github/actions/workflow/status/NithinSGowda/growwapi/npm-publish.yml?style=for-the-badge&label=CI%20Status) 
![license](https://img.shields.io/npm/l/growwapi?style=for-the-badge&label=License)

## 📝 Overview

growwapi is a NodeJS SDK for Groww trading APIs. The library provides functionality for trading on Groww including holdings management, margin calculations, order management, and position tracking.

---

## 🚀 Features

- **Live Feed**: Real-time data streaming for market prices
- **Historic Data**: Access to historical market data
- **Holdings**: Fetch user portfolio holdings
- **Instructions**: CSV-based instrument details
- **Live Data**: Current market data access
- **Margins**: Retrieve margin details and calculate margins required for orders
- **Orders**: Create, modify, cancel, and fetch order details
- **Positions**: Fetch user positions and trading symbol details
- **Authentication**: Secure API access with API key and TOTPrat

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
GROWW_LIVE_FEED_MAX_RETRY_COUNT=
GROWW_LIVE_FEED_MAX_RETRY_DURATION=
```

### 2. Sample Implementation

Here's an example of how to initialize the SDK, fetch your holdings, and place an order:

```typescript
import { GrowwAPI, Exchange, Segment, Product, OrderType, TransactionType, Validity } from 'growwapi';

const groww = new GrowwAPI();

const holdings = await groww.holdings.list();
console.log('Holdings:', holdings);

const orderDetails = {
  tradingSymbol: 'RELIANCE',
  quantity: 1,
  price: 2800,
  triggerPrice: 0,
  validity: Validity.Day,
  exchange: Exchange.NSE,
  segment: Segment.CASH,
  product: Product.CNC,
  orderType: OrderType.Limit,
  transactionType: TransactionType.Buy,
};

const order = await groww.orders.create(orderDetails);
console.log('Order placed successfully:', order);
```

---

## 📚 Examples

Once your environment is set up and the SDK is initialized, you can explore detailed usage for each feature in the [examples directory](./examples/)

- [Order Management](./examples/order.md)
- [Holdings](./examples/holdings.md)
- [Historic Data](./examples/historicData.md)
- [Instructions](./examples/instructions.md)
- [Live Data](./examples/liveData.md)
- [Live Feed](./examples/liveFeed.md)
- [Margins](./examples/margins.md)
- [Positions](./examples/positions.md)
- [Authentication](./examples/auth.md)

Each example demonstrates real-world usage and best practices for the respective module.

---

## 📚 API Reference

### Live Feed (`LiveFeed`)
- `LiveFeed.connect(callback: (data) => void): void`  
  Establishes a WebSocket connection for real-time data.
- `LiveFeed.subscribe(instrumentId: string): void`  
  Subscribes to real-time data for a specific instrument.
- `LiveFeed.consume(subscription: string): void`  
  Starts consuming data from a subscription.
- `LiveFeed.disconnect(): void`  
  Disconnects from the WebSocket.

---

### Live Data (`LiveData`)
- `LiveData.getQuote(params: GetQuoteParams): Promise<GetQuoteResponse>`  
  Fetches current quote for a trading symbol.
- `LiveData.getLTP(params: GetLTPParams): Promise<GetLTPResponse>`  
  Fetches last traded price for one or more symbols.
- `LiveData.getOHLC(params: GetOHLCParams): Promise<GetOHLCResponse>`  
  Fetches OHLC data for one or more symbols.

---

### Historic Data (`HistoricData`)
- `HistoricData.get(params: HistoricDataParams): Promise<HistoricDataResponse>`  
  Fetches historical candle data for a trading symbol.

---

### Instructions (`Instructions`)
- `Instructions.getInstructions(): Promise<InstructionsResponse>`  
  Fetches the full instructions CSV file.
- `Instructions.getFilteredInstructions(params: InstructionsTypeParams): Promise<InstructionsResponse>`  
  Fetches filtered instructions based on provided parameters.

---

### Portfolio & Trading

#### Holdings (`Holdings`)
- `Holdings.list(): Promise<HoldingsResponse>`  
  Fetches user holdings.

#### Margins (`Margins`)
- `Margins.details(): Promise<MarginsResponse>`  
  Fetches margin details for the user.
- `Margins.requiredForOrder(params: MarginsRequiredParams): Promise<MarginsRequiredResponse>`  
  Calculates margins required for an order.

#### Orders (`Orders`)
- `Orders.create(params: CreateOrderParams): Promise<CreateOrderResponse>`  
  Creates a new order.
- `Orders.modify(params: ModifyOrderParams): Promise<ModifyOrderResponse>`  
  Modifies an existing order.
- `Orders.cancel(params: CancelOrderParams): Promise<CancelOrderResponse>`  
  Cancels an order.
- `Orders.getTrades(params: GetTradesParams): Promise<GetTradesResponse>`  
  Fetches trade details for an order.
- `Orders.status(params: OrderStatusParams): Promise<OrderStatusResponse>`  
  Fetches the status of an order.
- `Orders.statusByReference(params: OrderStatusByReferenceParams): Promise<OrderStatusResponse>`  
  Fetches the status of an order by reference ID.
- `Orders.getOrders(params: ListOrderParams): Promise<OrderResponse[]>`  
  Lists all orders.
- `Orders.details(params: OrderDetailsParams): Promise<OrderResponse>`  
  Fetches details of an order.

#### Positions (`Positions`)
- `Positions.user(params: BaseParams): Promise<PositionsResponse>`  
  Fetches user positions.
- `Positions.tradingSymbol(params: TradingSymbolParams): Promise<TradingSymbolResponse>`  
  Fetches details of a trading symbol.

---

### Advanced Usage

### Authentication (`Auth`)
- `Auth.generateToken(): Promise<AuthTokenResponse>`  
  Generates a new authentication token.
- `Auth.refreshToken(): Promise<AuthTokenResponse>`  
  Refreshes the current authentication token.

---

### Types

All request and response types are available in the `types` directory and are strongly typed for TypeScript.  
See the [`types`](./src/types/) folder for details.

---

## 🛠️ Development

### Scripts
- `npm run build`: Builds the project.
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

## 🤔 Troubleshooting

- **Authentication Errors**: Ensure your `GROWW_API_KEY` and `GROWW_API_SECRET` are correct.
- **Invalid Parameters**: Double-check the parameters you are passing to the methods. Refer to the `types` directory for detailed information on the required and optional parameters.
- **Network Issues**: Ensure you have a stable internet connection. The SDK will attempt to retry failed requests, but a persistent network issue may cause problems.

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
