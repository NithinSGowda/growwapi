const FILECACHE_TTL_ENV = process.env.GROWW_FILECACHE_TTL ? parseInt(process.env.GROWW_FILECACHE_TTL) : null;
const LIVE_FEED_MAX_RETRY_COUNT_ENV = process.env.GROWW_LIVE_FEED_MAX_RETRY_COUNT ? parseInt(process.env.GROWW_LIVE_FEED_MAX_RETRY_COUNT) : null;
const LIVE_FEED_MAX_RETRY_DURATION_ENV = process.env.GROWW_LIVE_FEED_MAX_RETRY_DURATION ? parseInt(process.env.GROWW_LIVE_FEED_MAX_RETRY_DURATION) : null;

export const BASE_URL = process.env.GROWW_API_BASE_URL ?? 'https://api.groww.in/';
export const VERSION = process.env.GROWW_API_VERSION ?? 'v1';
export const API_URL = `${BASE_URL}${VERSION}`;
export const AUTH_URL = API_URL + '/token/api/access';
export const SOCKET_TOKEN_URL = API_URL + '/api/apex/v1/socket/token/create';
export const INSTRUCTIONS_URL = 'https://growwapi-assets.groww.in/instruments/instrument.csv';
export const FILECACHE_TTL: number = FILECACHE_TTL_ENV ?? 1000 * 60 * 60 * 24;
export const SOCKET_URL = 'wss://socket-api.groww.in';
export const LIVE_FEED_MAX_RETRY_COUNT: number = LIVE_FEED_MAX_RETRY_COUNT_ENV ?? 10;
export const LIVE_FEED_MAX_RETRY_DURATION: number = LIVE_FEED_MAX_RETRY_DURATION_ENV ?? 1000 * 30;
