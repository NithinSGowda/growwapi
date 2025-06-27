export interface CancelOrderResponse {
    orderId: string;
    status: string;
    message?: string;
    [key: string]: unknown;
}
