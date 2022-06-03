/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Appearance, LogBox, NativeEventSubscription } from 'react-native';

import {
  DefaultTheme as DefaultThemePaper,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  ThemeProvider,
  DefaultTheme as DefaultThemeStyled,
} from 'styled-components/native';

import theme from '@theme/index';

import Routes from '@routes/index';

import AllProviders from './contexts/AllProviders';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const getStyledTheme = () => {
    const colorSchemeName = isDarkMode ? 'dark' : 'light';
    const themeStyled: DefaultThemeStyled = {
      colors: theme.colors[colorSchemeName],
      dimensions: theme.dimensions,
      colorScheme: colorSchemeName,
    };

    return themeStyled;
  };

  const getPaperTheme = (): Theme => {
    const colorSchemeName = isDarkMode ? 'dark' : 'light';
    const themePaper: Theme = {
      ...DefaultThemePaper,
      dark: isDarkMode,
      roundness: 6,
      fonts: {
        ...DefaultThemePaper.fonts,
      },
      colors: {
        ...DefaultThemePaper.colors,
        primary: theme.colors[colorSchemeName].primary,
        accent: theme.colors[colorSchemeName].secondary,
        text: theme.colors[colorSchemeName].primaryText,
        error: theme.colors[colorSchemeName].attention,
        disabled: theme.colors[colorSchemeName].disabled,
      },
    };

    return themePaper;
  };

  const onAppearanceChange = () => {
    const colorScheme = Appearance.getColorScheme();
    setDarkMode(colorScheme === 'dark');
  };

  React.useEffect(() => {
    let appearanceSubscription: NativeEventSubscription | undefined;

    onAppearanceChange();
    appearanceSubscription = Appearance?.addChangeListener(onAppearanceChange);

    return () => {
      if (appearanceSubscription) {
        appearanceSubscription.remove();
      }
    };
  }, []);

  return (
    <ThemeProvider theme={getStyledTheme()}>
      <PaperProvider theme={getPaperTheme()}>
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
};
