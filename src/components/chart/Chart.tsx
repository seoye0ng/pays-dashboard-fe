import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import type { Payment } from '@/api/payments/type';

interface DailyPayment {
  date: string;
  amount: number;
}

export default function Chart({ payments }: { payments: Payment[] }) {
  const chartData: DailyPayment[] = [];

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
