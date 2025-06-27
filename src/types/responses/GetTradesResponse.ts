export interface GetTradesResponse {
    trades: Array<Record<string, unknown>>;
    page?: number;
    pageSize?: number;
    [key: string]: unknown;
}
