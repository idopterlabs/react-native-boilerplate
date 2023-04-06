import styled, { DefaultTheme } from 'styled-components/native';

import { Text } from 'react-native-paper';

import { Dropdown as DropdownComponent } from 'react-native-element-dropdown';

interface CommonProps {
  theme: DefaultTheme;
  isFocus: boolean;
  isDisabled: boolean;
  hasError: boolean;
  placeholderTextColor?: string;
}

interface ListEmptyLabelProps {
  isSelect: boolean;
}

const colorVerificationInput = (
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

const colorVerificationBorder = (
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

  return theme.colors.outline;
};

export const ContainerView = styled.View``;

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

export const Dropdown = styled(DropdownComponent).attrs(
  (props: CommonProps) => ({
    disabled: props.isDisabled,
    dropdownPosition: 'auto',
    keyboardAvoiding: true,
    activeColor: props.theme.colors.background,
    itemTextColor: props.theme.colors.text,
    placeholderStyle: {
      fontSize: 16,
      color: props.hasError
        ? props.theme.colors.error
        : props.placeholderTextColor || props.theme.colors.onSurfaceVariant,
    },
    containerStyle: {
      backgroundColor: props.theme.colors.background,
    },
    selectedTextStyle: {
      fontSize: 16,
      color: props.theme.colors.text,
    },
    itemTextStyle: {
      color: props.theme.colors.text,
    },
    inputSearchStyle: {
      backgroundColor: props.theme.colors.background,
      height: 40,
      fontSize: 16,
    },
    selectedTextProps: {
      color: props.theme.colors.text,
      fontSize: 17,
      paddingLeft: 12,
    },
    search: false,
  }),
)<CommonProps>`
  height: ${(props) => props.theme.dimensions.heightElementsForm}px;
  background-color: ${(props) => props.theme.colors.background};
  padding-left: 12px;
  padding-right: 12px;
  border-color: ${(props) =>
    colorVerificationBorder(
      props.theme,
      props.isFocus,
      props.isDisabled,
      props.hasError,
    )};
  border-radius: 4px;
  border-width: ${(props) => (props.isFocus || props.hasError ? 2 : 1)}px;
`;

export const LabelText = styled(Text).attrs(() => {
  return {
    variant: 'labelLarge',
  };
})`
  opacity: 1;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 12px;
  color: ${(props: CommonProps) =>
    colorVerificationInput(
      props.theme,
      props.isFocus,
      props.isDisabled,
      props.hasError,
    )};
`;

export const PlaceholderText = styled(Text).attrs(() => {
  return {
    variant: 'labelLarge',
  };
})`
  color: ${(props: CommonProps) =>
    colorVerificationInput(
      props.theme,
      false,
      props.isDisabled,
      props.hasError,
    )};
`;

export const AlertText = styled(Text)`
  color: ${(props) => props.theme.colors.error};
`;

export const LabelBackgroundView = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  z-index: 999;
  position: absolute;
  left: 10px;
  top: -8px;
`;

export const FixLabelBackgroundView = styled.View`
  position: absolute;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 8px;
`;

export const ListEmptyLabelContainerView = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ListEmptyLabelText = styled(Text)<ListEmptyLabelProps>`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text};
`;
