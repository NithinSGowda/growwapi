export interface ModifyOrderResponse {
    orderId: string;
    status: string;
    message?: string;
    [key: string]: unknown;
}
