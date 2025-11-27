import { getRequest } from '../httpRequests';
import type { MerchantsResponse, MerchantsDetailResponse, MerchantDetailResponse } from './type';

export const getMerchants = async () => {
  const { data } = await getRequest<MerchantsResponse>('/api/v1/merchants/list');

  return data;
};

export const getMerchantsDetail = async () => {
  const { data } = await getRequest<MerchantsDetailResponse>('/api/v1/merchants/details');

  return data;
};

export const getMerchantDetail = async (merchantId: string) => {
  const { data } = await getRequest<MerchantDetailResponse>(
    `/api/v1/merchants/details/${merchantId}`,
  );

  return data;
};
