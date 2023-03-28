import styled, { DefaultTheme } from 'styled-components/native';

import { Text } from 'react-native-paper';

import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

import LogoDarkSvg from '@assets/svg/logoDark.svg';
import LogoLightSvg from '@assets/svg/logoLight.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
  DefaultButton,
} from '@theme/common';

export const ContainerScroll = styled(ContainerScrollComponent).attrs(
  (props): KeyboardAwareScrollViewProps => {
    return {
      contentContainerStyle: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        paddingBottom: props.theme.dimensions.marginTopElementsForm,
      },
      keyboardShouldPersistTaps: 'always',
    };
  },
)``;

export const ContainerView = styled(ContainerViewComponent)`
  align-items: center;
  justify-content: center;
  padding-left: ${(props) => props.theme.dimensions.marginHorizontal}px;
  padding-right: ${(props) => props.theme.dimensions.marginHorizontal}px;
`;

export const BoxInputView = styled.View`
  width: 100%;
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
`;

export const ContainerBottomView = styled.View`
  width: 100%;
`;

export const RegisterButton = styled(DefaultButton)`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
` as typeof DefaultButton;

export const TitleText = styled(Text)`
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const LogoLightView = styled(LogoLightSvg).attrs({
  width: '60%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-left: auto;
  margin-right: auto;
`;

export const LogoDarkView = styled(LogoDarkSvg).attrs({
  width: '60%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-left: auto;
  margin-right: auto;
`;

export const VersionView = styled.View`
  width: 100%;
  justify-content: flex-end;
  z-index: 1;
`;

export const VersionText = styled(Text)`
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.onSurfaceVariant};
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
  margin-bottom: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
`;
