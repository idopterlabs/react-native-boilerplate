import { StatusBar as StatusBarReact } from 'react-native';

import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native-paper';

import theme from './index';

export const ContainerView = styled.View`
  flex: 1;
  background: ${theme.colors.backgroundLight};
`;

export const PrimaryStatusBar = styled(StatusBarReact).attrs({
  barStyle: 'dark-content',
  backgroundColor: theme.colors.primaryStatusBar,
  translucent: true,
})``;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: theme.colors.secondaryStatusBar,
  size: 'large',
})``;
