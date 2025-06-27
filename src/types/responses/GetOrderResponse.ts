export interface GetOrderResponse {
    order: Record<string, unknown>;
    status: string;
    [key: string]: unknown;
}
