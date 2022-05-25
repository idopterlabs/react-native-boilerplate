import styled from 'styled-components/native';
import { TextInput as TextInputComponent } from 'react-native-paper';
import { Controller as ControllerComponent } from 'react-hook-form';

import theme from '@theme/index';

export const ContainerTextInput = styled(TextInputComponent).attrs((props) => ({
  mode: props.mode || 'outlined',
  autoCapitalize: props.autoCapitalize || 'words',
  placeholderTextColor:
    props.placeholderTextColor || theme.colors.placeholderText,
  dense: true,
}))`
  font-size: 18px;
  padding-bottom: 0px;
  background-color: white;
` as unknown as typeof TextInputComponent;

export const FormController = styled(ControllerComponent)``;

export const ErrorMessageText = styled.Text`
  margin-top: 5px;
  color: ${theme.colors.attentionLight};
`;
