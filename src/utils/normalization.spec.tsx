import { cleanup } from '@testing-library/react-native';

import { extractPhoneNumber } from './normalization';

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
});
