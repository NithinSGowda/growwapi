import snakecaseKeys from 'snakecase-keys';
import { HttpClient } from '../utils/http';
import { CreateOrderParams } from '../types/CreateOrderParams';
import { GetTradesParams } from '../types';
import { CancelOrderParams } from '../types/CancelOrderParams';
import { GetOrderParams } from '../types/GetOrderParams';
import { ListOrderParams } from '../types/ListOrderParams';
import { ModifyOrderParams } from '../types/ModifyOrderParams';
import { OrderStatusParams } from '../types/OrderStatusParams';
import { OrderStatusByReferenceParams } from '../types/OrderStatusByReferenceParams';

export class Orders {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/order');
  }

  async create(params: CreateOrderParams) {
    return this.http.post('/create',
      snakecaseKeys(params)
    );
  }

  async modify(params: ModifyOrderParams){
    return this.http.post('/modify',
      snakecaseKeys(params));
  }

  async cancel(params: CancelOrderParams) {
    return this.http.post('/cancel',
      snakecaseKeys(params));
  }

  async getTrades(params: GetTradesParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/trades/${params.growwOrderId}${query}`);
  }

  async status(params: OrderStatusParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/status/${params.growwOrderId}${query}`);
  }

  async statusByReferenceID(params: OrderStatusByReferenceParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/status/${params.orderReferenceId}${query}`);
  }

  async list(params: ListOrderParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/list${query}`);
  }

  async get(params: GetOrderParams) {
    const query = params ? '?' + new URLSearchParams(params as any).toString() : '';
    return this.http.get(`/detail/${params.growwOrderId}${query}`);
  }
}
