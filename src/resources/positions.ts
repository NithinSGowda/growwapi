import { UserParams, UserPositionsResponse, TradingSymbolParams, TradingSymbolResponse } from '../types';
import { HttpClient } from '../utils/http';
import { buildUrlWithParams } from '../utils/url';

export class Positions {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/positions');
  }

  async user(params: UserParams): Promise<UserPositionsResponse> {
    const url = buildUrlWithParams('/user', params);
    return (await this.http.get(url)) as UserPositionsResponse;
  }

  async tradingSymbol(params: TradingSymbolParams): Promise<TradingSymbolResponse> {
    const url = buildUrlWithParams('/trading-symbol', params);
    return await this.http.get(url) as TradingSymbolResponse;
  }

}
