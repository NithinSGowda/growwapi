export interface ListOrderResponse {
    orders: Array<Record<string, unknown>>;
    page: number;
    pageSize: number;
    total: number;
    [key: string]: unknown;
}
