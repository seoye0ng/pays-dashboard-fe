import { useMemo } from 'react';
import type { Payment } from '@/api/payments/type';

interface Payments {
  recentCount: number;
  recentTotalAmount: number;
  successRate: number;
  failureRate: number;
}

export function usePayments(payments: Payment[] = [], days: number = 7): Payments {
  return useMemo(
    () => ({
      recentCount: 0,
      recentTotalAmount: 0,
      successRate: 0,
      failureRate: 0,
    }),
    [payments, days],
  );
}
