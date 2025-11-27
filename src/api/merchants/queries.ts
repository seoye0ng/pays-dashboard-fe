import { useQuery } from '@tanstack/react-query';
import { getMerchants, getMerchantsDetail, getMerchantDetail } from './requests';

export const useMerchants = () => {
  return useQuery({
    queryKey: ['merchants'],
    queryFn: getMerchants,
  });
};

export const useMerchantsDetail = () => {
  return useQuery({
    queryKey: ['merchants', 'details'],
    queryFn: getMerchantsDetail,
  });
};

export const useMerchantDetail = (id: string) => {
  return useQuery({
    queryKey: ['merchants', id],
    queryFn: () => getMerchantDetail(id),
    enabled: !!id,
  });
};
