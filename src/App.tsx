/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Appearance, LogBox, NativeEventSubscription } from 'react-native';

import {
  DefaultTheme as DefaultThemePaper,
  Provider as PaperProvider,
} from 'react-native-paper';
import { Theme as ThemePaper } from 'react-native-paper/lib/typescript/types';

import {
  DarkTheme,
  DefaultTheme,
  Theme as ThemeNavigation,
} from '@react-navigation/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  ThemeProvider,
  DefaultTheme as ThemeStyled,
} from 'styled-components/native';

import theme from '@theme/index';

import Routes from '@routes/index';

import AllProviders from './contexts/AllProviders';

LogBox.ignoreLogs([
  'Could not find Fiber with id "225"',
  'Non-serializable values were found in the navigation state',
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

export default () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  const getStyledTheme = (): ThemeStyled => {
    const colorSchemeName = isDarkMode ? 'dark' : 'light';
    const themeStyled: ThemeStyled = {
      colors: theme.colors[colorSchemeName],
      dimensions: theme.dimensions,
      colorScheme: colorSchemeName,
    };

    return themeStyled;
  };

  const getPaperTheme = (): ThemePaper => {
    const colorSchemeName = isDarkMode ? 'dark' : 'light';
    const themePaper: ThemePaper = {
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
        placeholder: theme.colors[colorSchemeName].placeholder,
      },
    };

    return themePaper;
  };

  const getNavigationTheme = (): ThemeNavigation => {
    const currentScheme = isDarkMode ? DarkTheme : DefaultTheme;
    const themeNavigation: ThemeNavigation = {
      ...currentScheme,
      dark: isDarkMode,
      colors: {
        ...currentScheme.colors,
      },
    };

    return themeNavigation;
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
              <Routes theme={getNavigationTheme()} />
            </AllProviders>
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PaperProvider>
    </ThemeProvider>
  );
};
