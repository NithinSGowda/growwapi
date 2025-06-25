import { TradingSymbolParams } from '../types/TradingSymbolParams';
import { UserParams } from '../types/UserParams';
import { HttpClient } from '../utils/http';

export class Positions {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/positions');
  }

  async user(params: UserParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/user${query}`);
  }

  async tradingSymbol(params: TradingSymbolParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/trading-symbol${query}`);
  }

}
