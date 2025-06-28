import snakecaseKeys from 'snakecase-keys';
import { RequiredForOrderParams } from '../types/RequiredForOrderParams';
import { HttpClient } from '../utils/http';
import { buildUrlWithParams } from '../utils/url';
import { MarginsDetailsResponse } from '../types/responses/MarginsDetailsResponse';
import { RequiredForOrderResponse } from '../types/responses/RequiredForOrderResponse';

export class Margins {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/margins');
  }

  async details(): Promise<MarginsDetailsResponse> {
    return (await this.http.get('/detail/user')) as MarginsDetailsResponse;
  }

  async requiredForOrder(params: RequiredForOrderParams): Promise<RequiredForOrderResponse> {
    return (await this.http.post(buildUrlWithParams('/detail/orders', params), [snakecaseKeys(params)])) as RequiredForOrderResponse;
  }
}
