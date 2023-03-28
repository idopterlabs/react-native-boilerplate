import { cleanup } from '@testing-library/react-native';

import { formatCurrency, formatAmountToNumber } from './currency';

describe('Currency Utils', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should return BRL format value', () => {
    expect(formatCurrency(154.343)).toEqual('R$\xa0154,34');

    expect(formatCurrency(154_000.343)).toEqual('R$\xa0154.000,34');

    expect(formatCurrency(154_000.3430101)).toEqual('R$\xa0154.000,34');
  });

  it('should return value in number from BRL format', () => {
    expect(formatAmountToNumber('R$ 154.000,34')).toEqual(154000.34);
  });

  it('should return value in number from BRL format without prefix R$', () => {
    expect(formatAmountToNumber('1.300.054.000,34')).toEqual(1300054000.34);
  });
});
