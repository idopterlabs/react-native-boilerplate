import { Platform } from 'react-native';
import {
  MD3Type,
  MD3TypescaleKey,
} from 'react-native-paper/lib/typescript/src/types';

const regularType: Partial<MD3Type> = {
  fontFamily: Platform.select({
    web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    ios: 'System',
    default: 'sans-serif',
  }),
  letterSpacing: 0,
  fontWeight: '400',
};

const mediumType: Partial<MD3Type> = {
  fontFamily: Platform.select({
    web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    ios: 'System',
    default: 'sans-serif-medium',
  }),
  letterSpacing: 0.15,
  fontWeight: '600',
};

const boldType: Partial<MD3Type> = {
  fontFamily: Platform.select({
    web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
    ios: 'System',
    default: 'sans-serif-medium',
  }),
  letterSpacing: 0.15,
  fontWeight: '700',
};

const fontConfig: Partial<Record<MD3TypescaleKey, Partial<MD3Type>>> = {
  displayLarge: {
    ...regularType,
    lineHeight: 34,
    fontSize: 30,
  },
  displayMedium: {
    ...regularType,
    lineHeight: 30,
    fontSize: 28,
  },
  displaySmall: {
    ...regularType,
    lineHeight: 28,
    fontSize: 26,
  },

  headlineLarge: {
    ...regularType,
    lineHeight: 40,
    fontSize: 28,
  },
  headlineMedium: {
    ...regularType,
    lineHeight: 36,
    fontSize: 26,
  },
  headlineSmall: {
    ...regularType,
    lineHeight: 32,
    fontSize: 24,
  },

  titleLarge: {
    ...boldType,
    fontWeight: 'bold',
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    ...boldType,
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: 18,
  },
  titleSmall: {
    ...boldType,
    fontWeight: 'bold',
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 16,
  },

  labelLarge: {
    ...mediumType,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 16,
  },
  labelMedium: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 14,
  },
  labelSmall: {
    ...mediumType,
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 12,
  },

  bodyLarge: {
    ...regularType,
    lineHeight: 24,
    fontSize: 16,
  },
  bodyMedium: {
    ...regularType,
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    ...regularType,
    letterSpacing: 0.4,
    lineHeight: 16,
    fontSize: 12,
  },

  // @ts-ignore
  default: {
    ...regularType,
  },
};

export default fontConfig;
