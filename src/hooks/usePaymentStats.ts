import { useMemo } from 'react';
import type { Payment } from '@/api/payments/type';

export interface PaymentStats {
  latestDate: string;
  recentTotalAmount: number;
  recentCount: number;
  successRate: number;
  failRate: number;
}

/**
 * 주어진 결제 목록에서 '가장 최근 일자'의 통계를 계산하는 React Hook
 * @param payments
 */
export function usePaymentStats(payments: Payment[] = []): PaymentStats {
  return useMemo(() => {
    if (!payments.length) {
      return {
        latestDate: '',
        recentTotalAmount: 0,
        recentCount: 0,
        successRate: 0,
        failRate: 0,
      };
    }

    let latestDateString = '';

    payments.forEach((p) => {
      const datePart = p.paymentAt.slice(0, 10);
      if (datePart > latestDateString) {
        latestDateString = datePart;
      }
    });

    if (!latestDateString) {
      return { latestDate: '', recentTotalAmount: 0, recentCount: 0, successRate: 0, failRate: 0 };
    }

    const dailyStats = payments.reduce(
      (acc, p) => {
        if (p.paymentAt.startsWith(latestDateString)) {
          acc.totalCount += 1;

          if (p.status === 'SUCCESS') {
            acc.successCount += 1;
            acc.totalSuccessAmount += parseFloat(p.amount) || 0;
          } else if (p.status === 'FAILED') {
            acc.failedCount += 1;
          }
        }
        return acc;
      },
      { totalCount: 0, successCount: 0, failedCount: 0, totalSuccessAmount: 0 },
    );

    const { totalCount, successCount, failedCount, totalSuccessAmount } = dailyStats;

    const recentCount = totalCount;
    const recentTotalAmount = totalSuccessAmount;

    const successRate = recentCount ? Math.round((successCount / recentCount) * 100) : 0;
    const failRate = recentCount ? Math.round((failedCount / recentCount) * 100) : 0;

    return {
      latestDate: latestDateString,
      recentTotalAmount,
      recentCount,
      successRate,
      failRate,
    };
  }, [payments]);
}
