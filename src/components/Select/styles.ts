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
    return theme.colors.primaryDark;
  }

  if (isDisabled) {
    return theme.colors.disabled;
  }

  return color;
};

export const ErrorMessage = styled.Text`
  margin-top: 5px;
  color: ${(props) => props.theme.colors.attentionLight};
`;

export const Dropdown = styled(DropdownComponent).attrs(
  (props: CommonProps) => ({
    disabled: props.isDisabled,
    dropdownPosition: 'auto',
    keyboardAvoiding: true,
    placeholderStyle: {
      fontSize: 16,
      color: props.placeholderTextColor || '#6f6f6f',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: props.theme.colors.primaryText,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    selectedTextProps: {
      color: props.theme.colors.primaryText,
      fontSize: 17,
      paddingLeft: 12,
    },
    search: true,
    searchPlaceholder: 'Pesquise...',
  }),
)<CommonProps>`
  height: 45px;
  background-color: white;
  padding-left: 12px;
  padding-right: 12px;
  border-color: ${(props) =>
    colorVerification(
      props.theme,
      props.isFocus,
      props.isDisabled,
      props.hasError,
      '#626466',
    )};
  border-width: ${(props) => (props.isFocus ? 1.75 : 1)}px;
`;

export const LabelText = styled(Text)`
  padding-left: 4px;
  padding-right: 4px;
  font-size: 14px;
  color: ${(props: CommonProps) =>
    colorVerification(
      props.theme,
      props.isFocus,
      props.isDisabled,
      props.hasError,
      props.theme.colors.primaryText,
    )};
`;

export const ContainerView = styled.View`
  margin-top: 6px;
`;

export const LabelBackgroundView = styled.View`
  background-color: #ffffff;
  z-index: 999;
  position: absolute;
  left: 10px;
  top: -8px;
`;

export const FixLabelBackgroundView = styled.View`
  position: absolute;
  background-color: ${(props) => props.theme.colors.backgroundLight};
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
  color: ${({ isSelect, theme }) =>
    isSelect ? theme.colors.disabledText : theme.colors.backgroundLight};
`;
