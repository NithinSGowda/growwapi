export enum OrderStatus {
  Acked = 'ACKED',
  Approved = 'APPROVED',
  CancellationRequested = 'CANCELLATION_REQUESTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  DeliveryAwaited = 'DELIVERY_AWAITED',
  Executed = 'EXECUTED',
  Failed = 'FAILED',
  ModificationRequested = 'MODIFICATION_REQUESTED',
  NewOrder = 'NEW',
  Rejected = 'REJECTED',
  TriggerPending = 'TRIGGER_PENDING',
}
