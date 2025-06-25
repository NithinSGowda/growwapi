import snakecaseKeys from 'snakecase-keys';
import { HttpClient } from '../utils/http';
import { CreateParams } from '../types/CreateParams';
import { ModifyParams } from '../types/ModifyParams';
import { CancelParams } from '../types/CancelParams';
import { GetTradesParams } from '../types/GetTradesParams';
import { StatusParams } from '../types/StatusParams';
import { StatusByReferenceParams } from '../types/StatusByReferenceParams';
import { ListParams } from '../types/ListParams';
import { GetParams } from '../types/GetParms';

export class Orders {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/order');
  }

  async create(params: CreateParams) {
    return this.http.post('/create',
      snakecaseKeys(params)
    );
  }

  async modify(params: ModifyParams){
    return this.http.post('/modify',
      snakecaseKeys(params));
  }

  async cancel(params: CancelParams) {
    return this.http.post('/cancel',
      snakecaseKeys(params));
  }

  async getTrades(params: GetTradesParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/trades/${params.growwOrderId}${query}`);
  }

  async status(params: StatusParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/status/${params.growwOrderId}${query}`);
  }

  async statusByReferenceID(params: StatusByReferenceParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/status/${params.orderReferenceId}${query}`);
  }

  async list(params: ListParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/list${query}`);
  }

  async get(params: GetParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/detail/${params.groww_order_id}${query}`);
  }
}
