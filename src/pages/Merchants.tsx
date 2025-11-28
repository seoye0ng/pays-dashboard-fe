import { useMerchants } from '@/api/merchants/queries';

export default function Merchants() {
  const { data: merchantsData, isLoading, error } = useMerchants();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading merchants</div>;
  if (!merchantsData || merchantsData.length === 0) return <div>No merchants found</div>;

  return <div></div>;
}
