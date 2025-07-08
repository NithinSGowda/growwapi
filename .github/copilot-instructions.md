# Copilot Instructions for growwapi

## Project Overview

growwapi is a NodeJS SDK for Groww trading APIs. The library provides functionality for trading on Groww including holdings management, margin calculations, order management, and position tracking.

## Core Commands

- **Build**: `npm run build` (runs `tsc` and `npm run build:esm`)
  - ESM Build: `npm run build:esm` (runs `tsc -p tsconfig.esm.json`)
- **Development**: `npm run dev` (runs `ts-node src/index.ts`)
- **Test**: `npm run test` (runs `jest`)
- **Lint**: `npm run lint` (runs `eslint src --ext .ts`)
- **Prepare**: `npm run prepare` (runs `npm run build` before publishing)

## Architecture

### Core Components

- **GrowwAPI**: The main class that initializes and provides access to all service modules
- **Resources**: Independent modules for different API functionalities:
  - `Auth`: Authentication and token management
  - `LiveFeed`: Real-time data streaming
  - `HistoricData`: Historical market data
  - `Holdings`: User portfolio holdings
  - `Instructions`: CSV-based instrument details
  - `LiveData`: Current market data
  - `Margins`: Margin calculations and requirements
  - `Orders`: Order creation, modification, and management
  - `Positions`: Position tracking and symbol details

### External APIs

- **Groww API**: Base URL `https://api.groww.in/v1`
  - Authentication: `/token/api/access`
  - Socket token: `/api/apex/v1/socket/token/create`
- **WebSocket**: `wss://socket-api.groww.in`
- **Instruments data**: `https://growwapi-assets.groww.in/instruments/instrument.csv`

### Data Flow

1. Authentication via API key and TOTP (OTPAuth)
2. Token-based API interaction for all trading operations
3. File caching for instrument data with configurable TTL
4. WebSocket connections for real-time data

## Style Guide

### TypeScript

- **Target**: ES2020
- **Module**: ESNext with Node resolution
- **Declaration**: Generated in `dist/types`
- **Strict Mode**: Enabled

### Formatting & Linting

- **Semicolons**: Required
- **Quotes**: Single quotes
- **Indentation**: 2 spaces
- **Trailing spaces**: Disallowed
- **EOL**: Required at end of files
- **any Type**: Permitted (`@typescript-eslint/no-explicit-any` is off)

### Error Handling

- API errors include status code, text response, and descriptive messages
- Environment variable validation with descriptive error messages
- Token expiration handling and automatic renewal

### Types & Interfaces

- Well-defined TypeScript interfaces for all API parameters and responses
- Organized in dedicated `types` directory
- Consistent naming with clear suffixes (e.g., `Params`, `Response`)
- All types should be alphabetically sorted
- Mandatory properties should be clearly defined, with optional properties marked as such
- Optional properties should be sorted after mandatory properties

## Environment Configuration

Required environment variables:
- `GROWW_API_KEY`: Authentication API key
- `GROWW_API_SECRET`: Secret for TOTP generation

Optional environment variables:
- `GROWW_API_BASE_URL`: Override default base URL (default: `https://api.groww.in/`)
- `GROWW_API_VERSION`: Override API version (default: `v1`)
- `GROWW_FILECACHE_TTL`: Override file cache TTL in milliseconds (default: 24 hours)
- `GROWW_LIVE_FEED_MAX_RETRY_COUNT`: Maximum retry count for live feed reconnections (default: 10)
- `GROWW_LIVE_FEED_MAX_RETRY_DURATION`: Maximum retry duration for live feed reconnections in milliseconds (default: 30 seconds)

## Development Guidelines

1. Maintain strong typing for all methods and parameters
2. Keep authentication logic in the Auth class
3. Follow resource-based module organization
4. Use camelCase for variables and methods
5. Document all public methods and parameters
6. Handle API errors consistently with descriptive messages
7. Validate environmental dependencies before API calls
8. Follow the established pattern for new resource modules
