import React from 'react';

import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer, Theme } from '@react-navigation/native';

import { useAuth } from '@contexts/AuthContext';

import SplashScreen from '@screens/SplashScreen';

import { PrimaryStatusBar } from '@theme/common';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

interface Props {
  theme: Theme;
}

export default ({ theme }: Props) => {
  const { isAuthenticated, isLoading } = useAuth();

  const hideSplashScreen = () => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true });
    }, 1000);
  };

  return (
    <NavigationContainer onReady={hideSplashScreen} theme={theme}>
      <PrimaryStatusBar />
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}</>
      )}
    </NavigationContainer>
  );
};
