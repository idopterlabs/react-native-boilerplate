import styled from 'styled-components/native';

import {
  ActivityIndicator,
  Button,
  ButtonProps,
  Card,
  TouchableRipple,
} from 'react-native-paper';

import { Keyboard, StatusBar as StatusBarReact } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ContainerSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const ContainerView = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const CloseKeyboardTouchableArea = styled.TouchableWithoutFeedback.attrs(
  (props) => {
    return {
      ...props,
      onPress: () => Keyboard.dismiss(),
    };
  },
)``;

export const ContainerScroll = styled(KeyboardAwareScrollView).attrs(
  (props) => {
    return {
      vertical: true,
      showsVerticalScrollIndicator: true,
      nestedScrollEnabled: true,
      contentContainerStyle: {
        paddingBottom: props.theme.dimensions.marginTopElementsForm,
      },
    };
  },
)`
  height: 100%;
  width: 100%;
`;

export const StatusBar = styled(StatusBarReact).attrs((props) => {
  return {
    barStyle:
      props.theme.colorScheme === 'dark' ? 'light-content' : 'dark-content',
    backgroundColor: props.theme.colors.background,
    translucent: true,
  };
})``;

export const LoadingIndicator = styled(ActivityIndicator).attrs((props) => {
  return {
    animating: true,
    color: props.theme.colors.primary,
    size: 'large',
  };
})``;

export const DefaultButton = styled(Button).attrs(
  (props): Omit<ButtonProps, 'children'> => {
    return {
      mode: 'contained',
      contentStyle: {
        height: props.theme.dimensions.heightElementsForm,
      },
      textColor:
        props.theme.colorScheme === 'dark'
          ? props.theme.colors.text
          : props.theme.colors.onPrimary,
    };
  },
)``;

export const DefaultTonalButton = styled(Button).attrs(
  (props): Omit<ButtonProps, 'children'> => {
    return {
      mode: 'contained-tonal',
      contentStyle: {
        height: props.theme.dimensions.heightElementsForm,
      },
    };
  },
)``;

export const DefaultOutlinedButton = styled(Button).attrs(
  (props): Omit<ButtonProps, 'children'> => {
    return {
      mode: 'outlined',
      contentStyle: {
        height: props.theme.dimensions.heightElementsForm,
      },
    };
  },
)`
  border-color: ${(props) => props.theme.colors.primary};
`;

export const DefaultTextButton = styled(Button).attrs((props) => {
  return {
    mode: 'text',
    contentStyle: {
      height: props.theme.dimensions.heightElementsForm,
    },
  };
})``;

export const DefaultCard = styled(Card)`
  overflow: hidden;
  border-color: ${(props) => props.theme.colors.outlineVariant};
  width: 100%;
`;

export const TouchableArea = styled(TouchableRipple)`
  width: 100%;
`;
