import { StatusBar as StatusBarReact } from 'react-native';

import styled from 'styled-components/native';

import { ActivityIndicator } from 'react-native-paper';

import theme from './theme';
const { colors } = theme;

export const ContainerView = styled.View`
  flex: 1;
  background: ${colors.backgroundLight};
`;

export const PrimaryStatusBar = styled(StatusBarReact).attrs({
  barStyle: 'dark-content',
  backgroundColor: colors.primaryStatusBar,
  translucent: true,
})``;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: colors.secondaryStatusBar,
  size: 'large',
})``;
