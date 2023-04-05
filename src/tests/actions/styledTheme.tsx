import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

// eslint-disable-next-line no-restricted-imports
import theme from '@theme/index';

export const withThemeProvider = (
  component: (params?: any) => JSX.Element,
  params: any = {},
) => {
  return (
    <SafeAreaProvider>
      <ThemeProvider
        // @ts-ignore
        theme={{
          colors: theme.colors.light,
          dimensions: theme.dimensions,
          colorScheme: 'light',
        }}>
        {component(params)}
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export const shadowTheme = (component: React.ReactElement<any>) => {
  return withThemeProvider(() => {
    return component;
  }, {});
};
