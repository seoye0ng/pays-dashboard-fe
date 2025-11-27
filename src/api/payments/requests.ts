import { getRequest } from '../httpRequests';
import type { PaymentsResponse } from './type';

export const getPayments = async () => {
  const { data } = await getRequest<PaymentsResponse>('/api/v1/merchants/list');

  return data;
};
