import { HoldingsResponse } from '../types';
import { HttpClient } from '../utils/http';

export class Holdings {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/holdings/user');
  }

  async list(): Promise<HoldingsResponse[]> {
    return (await this.http.get('')).holdings as HoldingsResponse[];
  }
}
