/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { LogBox } from 'react-native';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import AllProviders from './contexts/AllProviders';

import theme from '@theme/index';

import Routes from '@routes/index';

import { Theme } from 'react-native-paper/lib/typescript/types';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const themePaper: Theme = {
  ...DefaultTheme,
  dark: false,
  roundness: 6,
  fonts: {
    ...DefaultTheme.fonts,
  },
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.secondary,
    text: theme.colors.primaryText,
    error: theme.colors.attention,
    disabled: theme.colors.disabled,
  },
};

export default () => (
  <ThemeProvider theme={theme}>
    <PaperProvider theme={themePaper}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AllProviders>
            <Routes />
          </AllProviders>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PaperProvider>
  </ThemeProvider>
);
