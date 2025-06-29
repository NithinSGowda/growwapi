import { GetQuoteParams, GetQuoteResponse, GetLTPResponse, GetOHLCParams, GetOHLCResponse } from '../types';
import { GetLTPParams } from '../types/requests/GetLTPParams';
import { HttpClient } from '../utils/http';
import { buildUrlWithParams } from '../utils/url';

export class LiveData {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/live-data');
  }

  async getQuote(params: GetQuoteParams): Promise<GetQuoteResponse> {
    const url = buildUrlWithParams('/quote', params);
    return (await this.http.get(url)) as GetQuoteResponse;
  }

  async getLTP(params: GetLTPParams): Promise<GetLTPResponse> {
    const url = buildUrlWithParams('/ltp', params);
    return (await this.http.get(url)) as GetLTPResponse;
  }

  async getOHLC(params: GetOHLCParams): Promise<GetOHLCResponse> {
    const url = buildUrlWithParams('/ohlc', params);
    return (await this.http.get(url)) as GetOHLCResponse;
  }
}
