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

    const successCount = recentPayments.filter((p) => p.status === 'SUCCESS').length;
    const failureCount = recentPayments.filter((p) => p.status === 'FAILED').length;

    const successRate = (successCount / recentCount) * 100;
    const failureRate = (failureCount / recentCount) * 100;

    return {
      recentCount,
      recentTotalAmount,
      successRate: Number(successRate.toFixed(2)),
      failureRate: Number(failureRate.toFixed(2)),
    };
  }, [payments, days]);
}
