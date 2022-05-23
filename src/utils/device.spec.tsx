import { cleanup } from '@testing-library/react-native';

import { getAppVersion } from './device';

let mockedGetBuildNumber: jest.Mock<any, any>;
let mockedGetVersion: jest.Mock<any, any>;
jest.mock('react-native-device-info', () => {
  mockedGetBuildNumber = jest.fn().mockImplementation(() => '1');
  mockedGetVersion = jest.fn().mockImplementation(() => '1.0.0');

  return {
    getBuildNumber: mockedGetBuildNumber,
    getVersion: mockedGetVersion,
  };
});

describe('Device Utils', () => {
  afterEach(() => {
    cleanup();
    mockedGetBuildNumber.mockClear();
    mockedGetVersion.mockClear();
  });

  beforeEach(cleanup);

  it('should show current version via react-native-device-info', async () => {
    getAppVersion();

    expect(mockedGetBuildNumber).toHaveBeenCalledTimes(1);
    expect(mockedGetVersion).toHaveBeenCalledTimes(1);
  });
});
