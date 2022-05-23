jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android',
  select: () => 'android',
}));

export {};
