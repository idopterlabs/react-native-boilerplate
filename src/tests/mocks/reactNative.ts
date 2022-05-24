import * as ReactNative from 'react-native';

const Platform = {
  ...ReactNative.Platform,
  OS: 'android',
  Version: 123,
  isTesting: true,
  select: () => 'android',
};

Object.setPrototypeOf(
  {
    Platform,
  },
  ReactNative,
);

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

export {};
