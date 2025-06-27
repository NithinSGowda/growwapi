export interface OrderStatusByReferenceResponse {
    orderReferenceId: string;
    status: string;
    details?: Record<string, unknown>;
    [key: string]: unknown;
}
