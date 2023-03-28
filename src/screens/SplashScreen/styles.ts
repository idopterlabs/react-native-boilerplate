import styled from 'styled-components/native';

import LogoLightSvg from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  StatusBar as StatusBarVariantComponent,
} from '@theme/common';

export const ContainerView = styled(ContainerViewComponent)`
  justify-content: center;
  padding-left: ${(props) => props.theme.dimensions.marginHorizontal}px;
  padding-right: ${(props) => props.theme.dimensions.marginHorizontal}px;
  background-color: #ffffff;
`;

export const LogoSvg = styled(LogoLightSvg).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
`;

export const SplashScreenStatusBar = styled(StatusBarVariantComponent)``;
