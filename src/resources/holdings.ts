import { HttpClient } from '../utils/http';
import { HoldingsResponse } from '../types/responses/HoldingsResponse';

export class Holdings {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/holdings/user');
  }

  async list(): Promise<HoldingsResponse[]> {
    return (await this.http.get('')).holdings as HoldingsResponse[];
  }
}
