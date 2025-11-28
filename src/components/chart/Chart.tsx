import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import type { Payment } from '@/api/payments/type';

interface DailyPayment {
  date: string;
  amount: number;
}

export default function Chart({ payments }: { payments: Payment[] }) {
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  const dailyAmountMap: Record<string, number> = {};
  payments.forEach((payment) => {
    const paymentDate = new Date(payment.paymentAt);
    if (paymentDate >= oneMonthAgo) {
      const date = payment.paymentAt.slice(0, 10);
      dailyAmountMap[date] = (dailyAmountMap[date] || 0) + Number(payment.amount);
    }
  });

  const chartData: DailyPayment[] = Object.entries(dailyAmountMap)
    .map(([date, amount]) => ({ date, amount }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className='w-full h-64'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={chartData}>
          <XAxis dataKey='date' />
          <YAxis />
          <Line type='monotone' dataKey='amount' stroke='#3b82f6' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
