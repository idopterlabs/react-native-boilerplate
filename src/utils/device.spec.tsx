import { cleanup } from '@testing-library/react-native';

import {
  mockedGetBuildNumber,
  mockedGetVersion,
} from '@tests/mocks/rnDeviceInfo';

import { getAppVersion } from './device';

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
