import { StatusBar as StatusBarReact } from 'react-native';

import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native-paper';

export const ContainerView = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.backgroundLight};
`;

export const ContainerScroll = styled.ScrollView.attrs((props) => ({
  vertical: true,
  showsVerticalScrollIndicator: true,
  nestedScrollEnabled: true,
  contentContainerStyle: {
    paddingBottom: props.theme.dimensions.marginHorizontal / 2,
  },
}))`
  height: 100%;
  width: 100%;
`;

export const PrimaryStatusBar = styled(StatusBarReact).attrs((props) => ({
  barStyle: 'dark-content',
  backgroundColor: props.theme.colors.primaryStatusBar,
  translucent: true,
}))``;

export const SecondaryStatusBar = styled(StatusBarReact).attrs((props) => ({
  barStyle: 'dark-content',
  backgroundColor: props.theme.colors.secondaryStatusBar,
  translucent: true,
}))``;

export const SplashScreenStatusBar = styled(StatusBarReact).attrs((props) => ({
  barStyle: 'dark-content',
  backgroundColor: props.theme.colors.backgroundLight,
  translucent: true,
}))``;

export const LoadingIndicator = styled(ActivityIndicator).attrs((props) => ({
  animating: true,
  color: props.theme.colors.primary,
  size: 'large',
}))``;
