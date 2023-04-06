import styled, { DefaultTheme } from 'styled-components/native';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  StatusBar as StatusBarComponent,
} from '@theme/common';

export const ContainerView = styled(ContainerViewComponent)`
  justify-content: center;
  padding-left: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginHorizontal}px;
  padding-right: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginHorizontal}px;
`;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})``;

export const SplashScreenStatusBar = styled(StatusBarComponent)``;
