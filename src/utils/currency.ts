export const formatCurrency = (value: number) => {
  const currency: string = 'BRL';

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 3,
  }).format(value);
};

export const formatAmountToNumber = (amount: string): number => {
  const string = amount
    .replaceAll('.', '')
    .replace(',', '.')
    .replace('R$', '')
    .replace('R$\xa0', '');

  return Number(string);
};

export const replaceValueWithComma = (value: string | number): string =>
  String(Number(value).toFixed(2)).replace('.', ',');
