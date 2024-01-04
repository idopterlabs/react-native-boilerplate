import DeviceInfo from 'react-native-device-info';

import { RN_ENV } from '@env';

/* istanbul ignore next */
export const getAppVersion = (): string => {
  const currentBuild: string = DeviceInfo.getBuildNumber();
  const currentVersion: string = DeviceInfo.getVersion();
  let currentEnvironment: string = RN_ENV || 'unknown';

  let firstLetterCurrentEnvironment = currentEnvironment
    .charAt(0)
    .toLowerCase();

  if (firstLetterCurrentEnvironment === 'p') {
    return `${currentVersion}(${currentBuild})`;
  }

  return `${currentVersion}(${currentBuild}${firstLetterCurrentEnvironment})`;
};
