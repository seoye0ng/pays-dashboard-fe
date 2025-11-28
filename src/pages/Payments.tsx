import { usePayments } from '@/api/payments/queries';
import DataTable from '@/components/table/TableChart';

export default function PaymentsPage() {
  const { data: paymentsData, isLoading, error } = usePayments();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading payments</div>;
  if (!paymentsData || paymentsData.length === 0) return <div>No payments</div>;

  return (
    <div>
      <DataTable data={paymentsData} />
    </div>
  );
}
