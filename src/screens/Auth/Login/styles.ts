import styled from 'styled-components/native';

import { Text, Button } from 'react-native-paper';
import { MaskedTextInput as MaskedTextInputComponent } from 'react-native-mask-text';

import InputComponent from '@components/Input';
import SelectComponent from '@components/Select';

import {
  ContainerView as ContainerViewComponent,
  LoadingIndicator,
} from '@theme/common';

import theme from '@theme/index';

export const ContainerScroll = styled.ScrollView.attrs({
  vertical: false,
  showsVerticalScrollIndicator: true,
  nestedScrollEnabled: true,
  contentContainerStyle: {
    paddingBottom: theme.dimensions.marginHorizontal / 2,
  },
})`
  height: 100%;
  width: 100%;
`;

export const ContainerView = styled(ContainerViewComponent)`
  align-items: center;
  margin-left: ${theme.dimensions.marginHorizontal}px;
  margin-right: ${theme.dimensions.marginHorizontal}px;
`;

export const Loading = styled(LoadingIndicator)``;

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

export const LoginButton = styled(DefaultButton).attrs({
  color: theme.colors.primary,
})``;

export const TitleText = styled(Text)`
  width: 100%;
  font-size: 22px;
  font-weight: bold;
`;

export const SeparatorView = styled.View`
  background: ${theme.colors.disabledText};
  width: 100%;
  height: 1.5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Input = styled(InputComponent)``;

export const Select = styled(SelectComponent)``;

export const MaskedTextInput = styled(MaskedTextInputComponent)``;
