import { cleanup } from '@testing-library/react-native';

import { extractPhoneNumber, uppercaseFirstLetter } from './normalization';

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
});
