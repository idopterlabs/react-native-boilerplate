// eslint-disable-next-line no-restricted-imports
import 'styled-components';

// eslint-disable-next-line no-restricted-imports
import theme from '@theme/index';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors.light;
    dimensions: typeof theme.dimensions;
    colorScheme: 'light' | 'dark';
    fonts: Partial<Record<MD3TypescaleKey, Partial<MD3Type>>>;
  }
}
