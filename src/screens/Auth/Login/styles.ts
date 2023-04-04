import styled, { DefaultTheme } from 'styled-components/native';

import { Text, TextProps } from 'react-native-paper';
import { MaskedTextInput as MaskedTextInputComponent } from 'react-native-mask-text';
import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

import InputComponent from '@components/Input';
import SelectComponent from '@components/Select';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
  CloseKeyboardTouchableArea as CloseKeyboardTouchableAreaComponent,
  LoadingIndicator as LoadingIndicatorComponent,
  DefaultButton,
} from '@theme/common';

export const TitleText = styled(Text).attrs(
  (): Omit<TextProps<never>, 'children'> => {
    return {
      variant: 'titleLarge',
    };
  },
)`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
  text-align: center;
`;

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

export const CloseKeyboardTouchableArea = styled(
  CloseKeyboardTouchableAreaComponent,
)``;

export const LoginButton = styled(DefaultButton)`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
` as typeof DefaultButton;

export const Input = styled(InputComponent)`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
`;

export const Select = styled(SelectComponent)`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
`;

export const LoadingIndicator = styled(LoadingIndicatorComponent)``;

export const ContainerBoxView = styled.View`
  width: 100%;
`;

export const MaskedTextInput = styled(MaskedTextInputComponent)``;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
`;

export const VersionView = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
`;

export const VersionText = styled(Text).attrs(
  (): Omit<TextProps<never>, 'children'> => {
    return {
      variant: 'labelSmall',
    };
  },
)`
  text-align: center;
`;
