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
import { CreateOrderResponse } from '../types/responses/CreateOrderResponse';
import { ModifyOrderResponse } from '../types/responses/ModifyOrderResponse';
import { CancelOrderResponse } from '../types/responses/CancelOrderResponse';
import { GetTradesResponse } from '../types/responses/GetTradesResponse';
import { GetOrderResponse } from '../types/responses/GetOrderResponse';
import { ListOrderResponse } from '../types/responses/ListOrderResponse';
import { OrderStatusResponse } from '../types/responses/OrderStatusResponse';
import { OrderStatusByReferenceResponse } from '../types/responses/OrderStatusByReferenceResponse';

export class Orders {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/order');
  }

  async create(params: CreateOrderParams): Promise<CreateOrderResponse> {
    return this.http.post('/create',
      snakecaseKeys(params)
    );
  }

  async modify(params: ModifyOrderParams): Promise<ModifyOrderResponse> {
    return this.http.post('/modify',
      snakecaseKeys(params));
  }

  async cancel(params: CancelOrderParams): Promise<CancelOrderResponse> {
    return this.http.post('/cancel',
      snakecaseKeys(params));
  }

  async getTrades(params: GetTradesParams): Promise<GetTradesResponse> {
    const url = buildUrlWithParams(`/trades/${params.growwOrderId}`, params);
    return this.http.get(url);
  }

  async getOrder(params: GetOrderParams): Promise<GetOrderResponse> {
    const url = buildUrlWithParams('/get', params);
    return this.http.get(url);
  }

  async list(params: ListOrderParams): Promise<ListOrderResponse> {
    const url = buildUrlWithParams('/list', params);
    return this.http.get(url);
  }

  async status(params: OrderStatusParams): Promise<OrderStatusResponse> {
    const url = buildUrlWithParams('/status', params);
    return this.http.get(url);
  }

  async statusByReference(params: OrderStatusByReferenceParams): Promise<OrderStatusByReferenceResponse> {
    const url = buildUrlWithParams('/status-by-reference', params);
    return this.http.get(url);
  }
}
