// @ts-ignore
import MockAsyncStorage from 'mock-async-storage';

const mockImplementation = new MockAsyncStorage();
jest.mock(
  '@react-native-async-storage/async-storage',
  () => mockImplementation,
);

export {};
