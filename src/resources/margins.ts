import { RequiredForOrderParams } from '../types/RequiredForOrderParams';
import { HttpClient } from '../utils/http';

export class Margins {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/margins');
  }

  async details() {
    return this.http.get('/detail/user');
  }

  async requiredForOrder(params: RequiredForOrderParams) {
    return this.http.post(`/detail/orders?segment=${params.segment}`,params);
  }
}
