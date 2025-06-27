export interface OrderStatusResponse {
    orderId: string;
    status: string;
    details?: Record<string, unknown>;
    [key: string]: unknown;
}
