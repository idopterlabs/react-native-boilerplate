import { cleanup } from '@testing-library/react-native';

import {
  extractPhoneNumber,
  uppercaseFirstLetter,
  hiddenCardNumber,
  formatId,
  getTranslationProduct,
} from './normalization';

describe('Normalization Utils', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should return a string phone with a formatted phone props', () => {
    const phoneNumberFake = '(91) 99999-4325';
    const phoneNumberFakeResult = extractPhoneNumber(phoneNumberFake);
    expect(phoneNumberFakeResult).toBe('91999994325');
  });

  it('should return a empty string with a empty phone props', () => {
    const phoneNumberFake = '';
    const phoneNumberFakeResult = extractPhoneNumber(phoneNumberFake);
    expect(phoneNumberFakeResult).toBe('');
  });

  it('should return the uppercase fist letter of string with a string props', () => {
    const stringFake = 'fake string';
    const stringFakeResult = uppercaseFirstLetter(stringFake);

    expect(stringFakeResult).toBe('Fake string');
  });

  it('should return a empty string with a invalid string props to uppercase fist letter', () => {
    expect(uppercaseFirstLetter(135 as unknown as string)).toBe('');
    expect(uppercaseFirstLetter('' as unknown as string)).toBe('');
    expect(uppercaseFirstLetter(null as unknown as string)).toBe('');
    expect(uppercaseFirstLetter(false as unknown as string)).toBe('');
  });

  it('should change mid char to * for hidden card number', async () => {
    expect(hiddenCardNumber('1111222233334444')).toBe('1111********4444');
  });

  it('should return the 15 first char', () => {
    expect(formatId('12345678901234567890')).toBe('123456789012345');

    expect(formatId('1234567890')).toBe('1234567890');
  });

  it('should return corretcly translation product', () => {
    expect(getTranslationProduct('fuel')).toBe('Abastecimento');
    expect(getTranslationProduct('transportation')).toBe('Transporte');
    expect(getTranslationProduct('service')).toBe('Serviços');
    expect(getTranslationProduct('gas')).toBe('Vale gás');
    expect(getTranslationProduct('other')).toBe('Tipo não cadastrado');
  });
});
