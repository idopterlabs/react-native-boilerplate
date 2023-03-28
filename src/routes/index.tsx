import React from 'react';

import { NavigationContainer, Theme } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import { useAuth } from '@contexts/AuthContext';

import SplashScreen from '@screens/SplashScreen';

import { StatusBar } from '@theme/common';

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
      <StatusBar />
      {isLoading ? (
        <SplashScreen />
      ) : (
        <>
          {isAuthenticated ? (
            <>
              <AppNavigator />
            </>
          ) : (
            <>
              <AuthNavigator />
            </>
          )}
        </>
      )}
    </NavigationContainer>
  );
};
