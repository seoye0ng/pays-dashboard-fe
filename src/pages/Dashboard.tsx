import { usePayments } from '@/api/payments/queries';
import LabelCard from '@/components/card/LabelCard';
import Chart from '@/components/chart/Chart';
import DataTable from '@/components/table/TableChart';
import { usePaymentStats } from '@/hooks/usePaymentStats';

export default function DashboardPage() {
  const { data: paymentsData, isLoading, error } = usePayments();

  const stats = usePaymentStats(paymentsData || []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading payments</div>;
  if (!paymentsData || paymentsData.length === 0) return <div>No payments found</div>;

  const dateDescription = stats.latestDate ? `최근 (${stats.latestDate})` : '최근';

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        <LabelCard
          title={stats.recentCount.toLocaleString()}
          description={`${dateDescription} 결제 건수`}
        />
        <LabelCard
          title={`${stats.recentTotalAmount.toLocaleString()}원`}
          description={`${dateDescription} 결제 금액`}
        />
        <LabelCard title={`${stats.successRate}%`} description={`${dateDescription} 성공률`} />
        <LabelCard title={`${stats.failRate}%`} description={`${dateDescription} 실패율`} />
      </div>
      <Chart payments={paymentsData} />
      <DataTable data={paymentsData} />
    </div>
  );
}
