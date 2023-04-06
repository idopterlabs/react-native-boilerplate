/* eslint-disable no-restricted-imports */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';

import {
  ThemeProvider,
  DefaultTheme as ThemeStyled,
} from 'styled-components/native';
import {
  MD3LightTheme as DefaultThemeLightPaper,
  MD3DarkTheme as DefaultThemeDarkPaper,
  Provider as PaperProvider,
  configureFonts,
} from 'react-native-paper';

import { ThemeProp as ThemePaper } from 'react-native-paper/lib/typescript/src/types';

import {
  DefaultTheme as DefaultThemeLightNavigation,
  DarkTheme as DefaultThemeDarkNavigation,
  Theme as ThemeNavigation,
} from '@react-navigation/native';
import { Appearance, LogBox, NativeEventSubscription } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from '@routes/index';
import theme from '@theme/index';

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
      fonts: theme.fonts,
    };

    return themeStyled;
  };

  const getPaperTheme = (): ThemePaper => {
    const colorSchemeName = isDarkMode ? 'dark' : 'light';
    const currentSchemePaper: ThemePaper = isDarkMode
      ? DefaultThemeDarkPaper
      : DefaultThemeLightPaper;

    const themePaper: ThemePaper = {
      ...currentSchemePaper,
      mode: 'exact',
      fonts: configureFonts({ config: theme.fonts }),
      colors: {
        ...currentSchemePaper.colors,
        ...theme.colors[colorSchemeName],
      },
    };

    return themePaper;
  };

  const getNavigationTheme = (): ThemeNavigation => {
    const colorSchemeName = isDarkMode ? 'dark' : 'light';
    const currentSchemeNavigation: ThemeNavigation = isDarkMode
      ? DefaultThemeDarkNavigation
      : DefaultThemeLightNavigation;

    const themeNavigation: ThemeNavigation = {
      ...currentSchemeNavigation,
      dark: isDarkMode,
      colors: {
        ...currentSchemeNavigation.colors,
        primary: theme.colors[colorSchemeName].primary,
        background: theme.colors[colorSchemeName].surface,
        text: theme.colors[colorSchemeName].text,
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
