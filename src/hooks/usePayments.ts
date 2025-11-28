import { useMemo } from 'react';
import type { Payment } from '@/api/payments/type';

interface Payments {
  recentCount: number;
  recentTotalAmount: number;
  successRate: number;
  failureRate: number;
}

export function usePayments(payments: Payment[] = [], days: number = 7): Payments {
  return useMemo(() => {
    const now = new Date();
    const fromDate = new Date(now);
    fromDate.setDate(now.getDate() - days);

    const recentPayments = payments.filter((p) => new Date(p.paymentAt) >= fromDate);
    const recentCount = recentPayments.length;

    const recentTotalAmount = recentPayments
      .filter((p) => p.status === 'SUCCESS')
      .reduce((sum, p) => sum + Number(p.amount), 0);

    return {
      recentCount,
      recentTotalAmount,
      successRate: 0,
      failureRate: 0,
    };
  }, [payments, days]);
}
