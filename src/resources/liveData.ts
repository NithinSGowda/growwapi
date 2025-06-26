import { GetLTPParams } from '../types/GetLTPParams';
import { GetOHLCParams } from '../types/GetOHLCParams';
import { GetQuoteParams } from '../types/GetQuoteParams';
import { HttpClient } from '../utils/http';
import { buildUrlWithParams } from '../utils/url';

export class LiveData {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/live-data');
  }

  async getQuote(params: GetQuoteParams) {
    const url = buildUrlWithParams('/quote', params);
    return this.http.get(url);
  }

  async getLTP(params: GetLTPParams) {
    const url = buildUrlWithParams('/ltp', params);
    return this.http.get(url);
  }

  async getOHLC(params: GetOHLCParams) {
    const url = buildUrlWithParams('/ohlc', params);
    return this.http.get(url);
  }
}
