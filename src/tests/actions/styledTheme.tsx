import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import theme from '@theme/index';

export const withThemeProvider = (
  component: (params?: any) => JSX.Element,
  params: any = {},
) => {
  return (
    <ThemeProvider
      // @ts-ignore
      theme={{
        colors: theme.colors.light,
        dimensions: theme.dimensions,
        colorScheme: 'light',
      }}>
      {component(params)}
    </ThemeProvider>
  );
};

export const shadowTheme = (component: React.ReactElement<any>) => {
  return withThemeProvider(() => {
    return component;
  }, {});
};
