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
import { buildUrlWithParams } from '../utils/url';

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
    const url = buildUrlWithParams(`/trades/${params.growwOrderId}`, params);
    return this.http.get(url);
  }

  async status(params: OrderStatusParams) {
    const url = buildUrlWithParams(`/status/${params.growwOrderId}`, params);
    return this.http.get(url);
  }

  async statusByReferenceID(params: OrderStatusByReferenceParams) {
    const url = buildUrlWithParams(`/status/${params.orderReferenceId}`, params);
    return this.http.get(url);
  }

  async list(params: ListOrderParams) {
    const url = buildUrlWithParams('/list', params);
    return this.http.get(url);
  }

  async get(params: GetOrderParams) {
    const url = buildUrlWithParams(`/detail/${params.growwOrderId}`, params);
    return this.http.get(url);
  }
}
