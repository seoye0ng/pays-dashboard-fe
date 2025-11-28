import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
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
    .map(([date, amount]) => ({ date, amount: Math.round(amount / 10000) }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className='w-full h-64'>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='date'
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) =>
              new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
            }
          />
          <YAxis tickLine={false} axisLine={false} tickFormatter={(value) => `${value}만`} />
          <Tooltip
            formatter={(value: number) => [`${value.toLocaleString()}만`, '금액']}
            labelFormatter={(label: string) =>
              new Date(label).toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' })
            }
          />
          <Line
            type='monotone'
            dataKey='amount'
            stroke='#3b82f6'
            strokeWidth={3}
            dot={{ r: 2 }}
            activeDot={{ r: 5 }}
            fill='none'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
