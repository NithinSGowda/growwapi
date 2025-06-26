import { TradingSymbolParams } from '../types/TradingSymbolParams';
import { UserParams } from '../types/UserParams';
import { HttpClient } from '../utils/http';
import { buildUrlWithParams } from '../utils/url';

export class Positions {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/positions');
  }

  async user(params: UserParams) {
    const url = buildUrlWithParams('/user', params);
    return this.http.get(url);
  }

  async tradingSymbol(params: TradingSymbolParams) {
    const url = buildUrlWithParams('/trading-symbol', params);
    return this.http.get(url);
  }

}
