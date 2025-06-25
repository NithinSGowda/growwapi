export enum OrderStatus {
  NewOrder = 'NEW',
  Acked = 'ACKED',
  TriggerPending = 'TRIGGER_PENDING',
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Failed = 'FAILED',
  Executed = 'EXECUTED',
  DeliveryAwaited = 'DELIVERY_AWAITED',
  Cancelled = 'CANCELLED',
  CancellationRequested = 'CANCELLATION_REQUESTED',
  ModificationRequested = 'MODIFICATION_REQUESTED',
  Completed = 'COMPLETED',
}
