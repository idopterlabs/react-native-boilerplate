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
) => {
  if (hasError) {
    return theme.colors.error;
  }

  if (isFocus) {
    return theme.colors.primary;
  }

  if (isDisabled) {
    return theme.colors.surfaceDisabled;
  }

  return theme.colors.onSurfaceVariant;
};

export const getColorIcon = (
  hasError: boolean = false,
  isDisabled: boolean = false,
) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const themeContext = useContext(ThemeContext);
  if (hasError) {
    return themeContext.colors.error;
  }

  if (isDisabled) {
    return themeContext.colors.surfaceDisabled;
  }

  return themeContext.colors.primary;
};

export const ContainerTextInput = styled(TextInputComponent).attrs((props) => {
  return {
    mode: props.mode || 'outlined',
    placeholderTextColor:
      props.placeholderTextColor || props.theme.colors.onSurfaceVariant,
    outlineColor: `${props.theme.colors.onSurface}50`,
  };
})`
  /* FIXME: this create problem in ScrollView height: ${(props) =>
    props.theme.dimensions.heightElementsForm}px; */
  font-size: 18px;
  padding-bottom: 0px;
  background-color: ${(props) => props.theme.colors.onSurface}05;
` as unknown as typeof TextInputComponent;

export const LabelText = styled(Text).attrs(() => {
  return {
    variant: 'labelLarge',
  };
})`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props: CommonProps) =>
    colorVerification(
      props.theme,
      props.isFocus,
      props.isDisabled,
      props.hasError,
    )};
`;

export const AlertText = styled(Text)`
  color: ${(props) => props.theme.colors.error};
`;

export const FormController = styled(ControllerComponent)``;

export const ErrorMessageText = styled(Text).attrs(() => {
  return {
    variant: 'labelMedium',
  };
})`
  margin-top: 5px;
  margin-right: 8px;
  margin-left: 8px;
  color: ${(props) => props.theme.colors.error};
`;
