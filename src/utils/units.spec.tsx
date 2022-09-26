import { cleanup } from '@testing-library/react-native';

import { millisecond, second, minute } from './units';

describe('Units Utils', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should return all correct value ', () => {
    expect(millisecond).toBe(1);
    expect(second).toBe(1_000);
    expect(minute).toBe(60_000);
  });
});
