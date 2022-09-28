import { useContext } from 'react';

import styled, { ThemeContext, DefaultTheme } from 'styled-components/native';
import { TextInput as TextInputComponent, Text } from 'react-native-paper';
import { Controller as ControllerComponent } from 'react-hook-form';

interface CommonProps {
  theme: DefaultTheme;
  isFocus: boolean;
  isDisabled: boolean;
  hasError: boolean;
  placeholderTextColor?: string;
}

const colorVerification = (
  theme: DefaultTheme,
  isFocus: boolean,
  isDisabled: boolean,
  hasError: boolean,
  color: string,
) => {
  if (hasError) {
    return theme.colors.attention;
  }

  if (isFocus) {
    return theme.colors.primary;
  }

  if (isDisabled) {
    return theme.colors.disabled;
  }

  return color;
};

export const getColorIcon = (
  hasError: boolean = false,
  isDisabled: boolean = false,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const themeContext = useContext(ThemeContext);
  if (hasError) {
    return themeContext.colors.attention;
  }

  if (isDisabled) {
    return themeContext.colors.disabled;
  }

  return themeContext.colors.primary;
};

export const ContainerTextInput = styled(TextInputComponent).attrs((props) => {
  return {
    mode: props.mode || 'outlined',
    placeholderTextColor:
      props.placeholderTextColor || props.theme.colors.placeholderText,
    dense: true,
  };
})`
  font-size: 18px;
  padding-bottom: 0px;
  background-color: ${(props) => props.theme.colors.backgroundLight};
` as unknown as typeof TextInputComponent;

export const LabelText = styled(Text)`
  background-color: ${(props) => props.theme.colors.backgroundLight};
  color: ${(props: CommonProps) =>
    colorVerification(
      props.theme,
      props.isFocus,
      props.isDisabled,
      props.hasError,
      '#626466',
    )};
`;

export const AlertText = styled(Text)`
  color: ${(props) => props.theme.colors.attention}; ;
`;

export const FormController = styled(ControllerComponent)``;

export const ErrorMessageText = styled.Text`
  margin-top: 5px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.attentionLight};
`;
