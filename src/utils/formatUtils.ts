export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(date)
    .replace(/\./g, '.')
    .replace(' ', '');
}

export function formatAmount(amount: string, currency: string) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency,
  }).format(Number(amount));
}
