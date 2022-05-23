import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { RN_ENV } from '@env';

// @ts-ignore
import DeviceBrightness from '@adrianso/react-native-device-brightness';

export const resetBrightness = (oldBrightnessLevel: number) => {
  // https://developer.android.com/reference/android/view/WindowManager.LayoutParams#BRIGHTNESS_OVERRIDE_OFF
  let brightnessOverrideNone = -1;
  if (Platform.OS === 'ios') {
    brightnessOverrideNone = oldBrightnessLevel;
  }

  DeviceBrightness.setBrightnessLevel(brightnessOverrideNone);
};

export const maxBrightness = async (): Promise<number> => {
  // https://developer.android.com/reference/android/view/WindowManager.LayoutParams#BRIGHTNESS_OVERRIDE_FULL
  const BrightnessOverrideFull = 1; // Current same value in iOS (0.0 ... 1.0)
  DeviceBrightness.setBrightnessLevel(BrightnessOverrideFull);

  return await DeviceBrightness.getBrightnessLevel();
};

/* istanbul ignore next */
export const getAppVersion = (): string => {
  const currentBuild: string = DeviceInfo.getBuildNumber();
  const currentVersion: string = DeviceInfo.getVersion();
  let currentEnvironment: string = RN_ENV || 'unknown';

  return `${currentVersion}(${currentBuild}${currentEnvironment
    .charAt(0)
    .toLowerCase()})`;
};
