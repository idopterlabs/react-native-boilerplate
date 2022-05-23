import AsyncStorage from '@react-native-async-storage/async-storage';

import { readItem, writeItem, clear } from './localStorage';

describe('Countries utils', () => {
  beforeEach(async () => {
    AsyncStorage.clear();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a test_value correctly', async () => {
    await writeItem('test_key', 'test_value');

    const testValue = await readItem('test_key');

    expect(testValue).toEqual('test_value');
  });

  it('should return a null value when using clear function correctly', async () => {
    await writeItem('test_key', 'test_value');

    await clear();
    const testValue = await readItem('test_key');

    expect(testValue).toEqual(null);
  });
});
