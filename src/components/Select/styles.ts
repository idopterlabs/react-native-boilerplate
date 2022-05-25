import styled from 'styled-components/native';

import { Text } from 'react-native-paper';
import { Dropdown as DropdownComponent } from 'react-native-element-dropdown';
import globalTheme from '@theme/index';

interface CommunProps {
  isFocus: boolean;
  isDisabled: boolean;
  hasError: boolean;
  placeholderTextColor?: string;
}

const colorVerification = (
  isFocus: boolean,
  isDisabled: boolean,
  hasError: boolean,
  color: string,
) => {
  if (hasError) {
    return globalTheme.colors.attention;
  }

  if (isFocus) {
    return globalTheme.colors.primaryDark;
  }

  if (isDisabled) {
    return globalTheme.colors.disabled;
  }

  return color;
};

export const ErrorMessage = styled.Text`
  margin-top: 5px;
  color: ${(props) => props.theme.colors.attentionLight};
`;

export const Dropdown = styled(DropdownComponent).attrs(
  (props: CommunProps) => ({
    disabled: props.isDisabled,
    dropdownPosition: 'auto',
    keyboardAvoiding: true,
    placeholderStyle: {
      fontSize: 16,
      color: props.placeholderTextColor || '#6f6f6f',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: globalTheme.colors.primaryText,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    selectedTextProps: {
      color: globalTheme.colors.primaryText,
      fontSize: 17,
      paddingLeft: 12,
    },
    search: true,
    searchPlaceholder: 'Pesquise...',
  }),
)<CommunProps>`
  height: 45px;
  background-color: white;
  padding-left: 12px;
  padding-right: 12px;
  border-color: ${(props) =>
    colorVerification(
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
  color: ${(props: CommunProps) =>
    colorVerification(
      props.isFocus,
      props.isDisabled,
      props.hasError,
      globalTheme.colors.primaryText,
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
