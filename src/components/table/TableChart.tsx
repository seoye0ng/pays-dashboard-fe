import { IconBan, IconCircleCheckFilled, IconLoader, IconX } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { Payment } from '@/api/payments/type';

function getStatusIcon(status: Payment['status']) {
  switch (status) {
    case 'SUCCESS':
      return <IconCircleCheckFilled className='mr-1 w-5 h-5 fill-green-500' />;
    case 'FAILED':
      return <IconX className='mr-1 w-5 h-5 text-red-500' />;
    case 'CANCELLED':
      return <IconBan className='mr-1 w-5 h-5 text-gray-500' />;
    case 'PENDING':
    default:
      return <IconLoader className='mr-1 w-5 h-5 text-yellow-500' />;
  }
}

export default function TableChart({ data }: { data: Payment[] }) {
  return (
    <div className='overflow-hidden rounded-lg border'>
      <Table>
        <TableHeader className='bg-muted sticky top-0 z-10'>
          <TableRow>
            <TableHead className='pl-5'>No</TableHead>
            <TableHead>결제번호</TableHead>
            <TableHead>가맹점</TableHead>
            <TableHead>결제수단</TableHead>
            <TableHead>상태</TableHead>
            <TableHead>금액</TableHead>
            <TableHead>결제일시</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='**:data-[slot=table-cell]:first:w-8'>
          {data?.length ? (
            data.map((row, i) => (
              <TableRow key={row.paymentCode}>
                <TableCell className='pl-5'>{i + 1}</TableCell>
                <TableCell className='font-medium'>{row.paymentCode}</TableCell>
                <TableCell>{row.mchtCode}</TableCell>
                <TableCell>
                  <div className=''>
                    <Badge variant='outline' className='text-muted-foreground p-1.5'>
                      {row.payType}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant='outline' className='text-muted-foreground  rounded-full'>
                    {getStatusIcon(row.status)}
                    <IconLoader className='mr-1 w-5' />
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{row.paymentAt}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
