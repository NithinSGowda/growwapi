export interface DetailOrderResponse {
    orders: Array<Record<string, unknown>>;
    page: number;
    pageSize: number;
    total: number;
}
