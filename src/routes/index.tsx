import React from 'react';

import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '@contexts/AuthContext';

import { PrimaryStatusBar } from '@theme/common';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

export default () => {
  const { signedIn } = useAuth();

  const hideSplashScreen = () => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
  };

  return (
    <NavigationContainer onReady={hideSplashScreen}>
      <PrimaryStatusBar />
      {signedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
