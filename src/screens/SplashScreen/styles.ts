import styled from 'styled-components/native';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  StatusBar as StatusBarComponent,
} from '@theme/common';

import dimensions from '@theme/dimensions';

export const ContainerView = styled(ContainerViewComponent)`
  justify-content: center;
  padding-left: ${dimensions.marginHorizontal}px;
  padding-right: ${dimensions.marginHorizontal}px;
`;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;

export const SplashScreenStatusBar = styled(StatusBarComponent)``;
