import { StatusBar as StatusBarReact } from 'react-native';

import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native-paper';

import theme from './index';

export const ContainerView = styled.View`
  flex: 1;
  background: ${theme.colors.backgroundLight};
`;

export const ContainerScroll = styled.ScrollView.attrs({
  vertical: true,
  showsVerticalScrollIndicator: true,
  nestedScrollEnabled: true,
  contentContainerStyle: {
    paddingBottom: theme.dimensions.marginHorizontal / 2,
  },
})`
  height: 100%;
  width: 100%;
`;

export const PrimaryStatusBar = styled(StatusBarReact).attrs({
  barStyle: 'dark-content',
  backgroundColor: theme.colors.primaryStatusBar,
  translucent: true,
})``;

export const SecondaryStatusBar = styled(StatusBarReact).attrs({
  barStyle: 'dark-content',
  backgroundColor: theme.colors.secondaryStatusBar,
  translucent: true,
})``;

export const SplashScreenStatusBar = styled(StatusBarReact).attrs({
  barStyle: 'dark-content',
  backgroundColor: theme.colors.backgroundLight,
  translucent: true,
})``;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: theme.colors.primary,
  size: 'large',
})``;
