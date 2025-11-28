import { usePayments } from '@/api/payments/queries';

export default function DashboardPage() {
  const { data: paymentsData, isLoading, error } = usePayments();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading payments</div>;
  if (!paymentsData || paymentsData.length === 0) return <div>No payments found</div>;

  return <div></div>;
}
