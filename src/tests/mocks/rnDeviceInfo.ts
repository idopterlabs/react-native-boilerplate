export let mockedGetBuildNumber: jest.Mock<any, any>;
export let mockedGetVersion: jest.Mock<any, any>;
jest.mock('react-native-device-info', () => {
  mockedGetBuildNumber = jest.fn().mockImplementation(() => '1');
  mockedGetVersion = jest.fn().mockImplementation(() => '1.0.0');

  return {
    getBuildNumber: mockedGetBuildNumber,
    getVersion: mockedGetVersion,
  };
});

export {};
