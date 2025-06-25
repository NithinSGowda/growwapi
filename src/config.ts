export const BASE_URL = process.env.GROWW_API_BASE_URL ?? 'https://api.groww.in/';
export const VERSION = process.env.GROWW_API_VERSION ?? 'v1';
export const API_URL = `${BASE_URL}${VERSION}`;
export const AUTH_URL = API_URL + '/token/api/access';
export const SOCKET_TOKEN_URL = API_URL + '/api/apex/v1/socket/token/create';
