import snakecaseKeys from 'snakecase-keys';
import { HttpClient } from '../utils/http';
import { CreateOrderParams, CreateOrderResponse, ModifyOrderParams, ModifyOrderResponse, CancelOrderParams, CancelOrderResponse, GetTradesParams, GetTradesResponse, OrderStatusParams, OrderStatusResponse, OrderStatusByReferenceParams, ListOrderParams, OrderResponse, OrderDetailsParams } from '../types';
import { buildUrlWithParams } from '../utils/url';

export class Orders {
  private http: HttpClient;

  constructor(baseUrl: string) {
    this.http = new HttpClient(baseUrl, '/order');
  }

  async create(params: CreateOrderParams): Promise<CreateOrderResponse> {
    return await this.http.post('/create',
      snakecaseKeys(params)) as CreateOrderResponse;
  }

  async modify(params: ModifyOrderParams): Promise<ModifyOrderResponse> {
    return await this.http.post('/modify',
      snakecaseKeys(params)) as ModifyOrderResponse;
  }

  async cancel(params: CancelOrderParams): Promise<CancelOrderResponse> {
    return await this.http.post('/cancel',
      snakecaseKeys(params)) as CancelOrderResponse;
  }

  async getTrades(params: GetTradesParams): Promise<GetTradesResponse[]> {
    const url = buildUrlWithParams(`/trades/${params.growwOrderId}`, params);
    return (await this.http.get(url)).trade_list as GetTradesResponse[];
  }

  async status(params: OrderStatusParams): Promise<OrderStatusResponse> {
    const url = buildUrlWithParams(`/status/${params.growwOrderId}`, params);
    return await this.http.get(url) as OrderStatusResponse;
  }

  async statusByReference(params: OrderStatusByReferenceParams): Promise<OrderStatusResponse> {
    const url = buildUrlWithParams(`/status/reference/${params.orderReferenceId}`, params);
    return await this.http.get(url) as OrderStatusResponse;
  }

  async getOrders(params: ListOrderParams): Promise<OrderResponse[]> {
    const url = buildUrlWithParams('/list', params);
    return (await this.http.get(url)).order_list as OrderResponse[];
  }

  async Details(params: OrderDetailsParams): Promise<OrderResponse> {
    const url = buildUrlWithParams(`/detail/${params.growwOrderId}`, params);
    return await this.http.get(url) as OrderResponse;
  }
}
