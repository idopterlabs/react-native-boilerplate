jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  let platform = {
    OS: 'android',
  };

  const select = jest.fn().mockImplementation((obj) => {
    const value = obj[platform.OS];
    return !value ? obj.default : value;
  });

  // @ts-ignore
  platform.select = select;

  return platform;
});

export let mockedOpenURL: jest.Mock<Promise<{}>, []> = jest
  .fn()
  .mockResolvedValue('granted');

jest.mock('react-native/Libraries/Linking/Linking', () => {
  const realModule = jest.requireActual(
    'react-native/Libraries/Linking/Linking',
  );

  return {
    ...realModule,
    addEventListener: jest.fn().mockResolvedValue(''),
    removeEventListener: jest.fn().mockResolvedValue(''),
    openURL: mockedOpenURL,
  };
});

export let mockedPermissionsAndroidRequest: jest.Mock<Promise<{}>, []> = jest
  .fn()
  .mockResolvedValue('granted');

jest.mock(
  'react-native/Libraries/PermissionsAndroid/PermissionsAndroid',
  () => {
    return {
      ...jest.requireActual(
        'react-native/Libraries/PermissionsAndroid/PermissionsAndroid',
      ),
      request: mockedPermissionsAndroidRequest,
    };
  },
);

jest.mock('react-native/Libraries/Interaction/PanResponder', () => {
  return {
    ...jest.requireActual('react-native/Libraries/Interaction/PanResponder'),
    create: (config: any) => {
      return { panHandlers: config };
    },
  };
});

jest.mock('react-native/Libraries/Vibration/Vibration', () => ({
  vibrate: jest.fn(),
}));

// @ts-ignore
global.FormData = require('react-native/Libraries/Network/FormData');

export {};
