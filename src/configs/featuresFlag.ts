import { RN_FEATURES_OFF } from '@env';

export type AllFeatures = 'logo' | 'anotherFeature';

export type FeaturesEnabled = {
  [key in AllFeatures]?: boolean;
};

const featuresFlagList: AllFeatures[] = ['logo', 'anotherFeature'];
const featuresFlagDisabled: AllFeatures[] = RN_FEATURES_OFF
  ? (RN_FEATURES_OFF.split(',') as AllFeatures[])
  : [];

const getFeaturesFlagEnabled = (): FeaturesEnabled => {
  const enabled: FeaturesEnabled = {};
  for (const featureName of featuresFlagList) {
    enabled[featureName] = !featuresFlagDisabled.includes(featureName);
  }

  return enabled;
};

export default getFeaturesFlagEnabled();
