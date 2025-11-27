import type { ApiResponse } from '../common/types/types';

export interface Merchant {
  mchtCode: string;
  mchtName: string;
  status: string;
  bizType: string;
}

export interface MerchantDetail extends Merchant {
  address: string;
  phone: string;
  email: string;
  registeredAt: string;
  updatedAt: string;
}

export type MerchantsResponse = ApiResponse<Merchant[]>;
export type MerchantsDetailResponse = ApiResponse<MerchantDetail[]>;
export type MerchantDetailResponse = ApiResponse<MerchantDetail>;
