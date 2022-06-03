import styled from 'styled-components/native';

import { Text, Button } from 'react-native-paper';
import { MaskedTextInput as MaskedTextInputComponent } from 'react-native-mask-text';

import InputComponent from '@components/Input';
import SelectComponent from '@components/Select';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
  LoadingIndicator as LoadingIndicatorComponent,
} from '@theme/common';

import dimensions from '@theme/dimensions';

export const ContainerScroll = styled(ContainerScrollComponent)``;

export const ContainerView = styled(ContainerViewComponent)`
  align-items: center;
  margin-left: ${dimensions.marginHorizontal}px;
  margin-right: ${dimensions.marginHorizontal}px;
`;

export const LoadingIndicator = styled(LoadingIndicatorComponent)``;

export const BoxInputView = styled.View`
  width: 100%;
  margin-top: 8px;
`;

export const ContainerBottomView = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const DefaultButton = styled(Button).attrs({
  mode: 'contained',
  contentStyle: { justifyContent: 'center', height: 45 },
})`
  margin-top: 15px;
  width: 100%;
`;

export const LoginButton = styled(DefaultButton).attrs((props) => ({
  color: props.theme.colors.primary,
}))``;

export const TitleText = styled(Text)`
  margin-top: 10px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const SeparatorView = styled.View`
  background: ${(props) => props.theme.colors.disabledText};
  width: 100%;
  height: 1.5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Input = styled(InputComponent)``;

export const Select = styled(SelectComponent)``;

export const MaskedTextInput = styled(MaskedTextInputComponent)``;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;
