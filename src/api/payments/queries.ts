import { useQuery } from '@tanstack/react-query';
import { getPayments } from './requests';

export const usePayments = () => {
  return useQuery({
    queryKey: ['payments'],
    queryFn: getPayments,
  });
};
