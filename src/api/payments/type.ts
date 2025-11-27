import type { ApiResponse } from '../common/types/types';

export interface Payment {
  paymentCode: 'string';
  mchtCode: 'string';
  amount: 'string';
  currency: 'string';
  payType: 'ONLINE' | 'DEVICE' | 'MOBILE' | 'BILLING' | 'VACT';
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'CANCELLED';
  paymentAt: 'string'; // ISO 8601 format
}

export type PaymentsResponse = ApiResponse<Payment[]>;
