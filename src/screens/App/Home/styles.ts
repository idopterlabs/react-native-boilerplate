import styled, { DefaultTheme } from 'styled-components/native';

import { Text, TextProps } from 'react-native-paper';

import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

import Logo from '@assets/svg/logo.svg';

import {
  ContainerView as ContainerViewComponent,
  ContainerScroll as ContainerScrollComponent,
} from '@theme/common';

export const ContainerScroll = styled(ContainerScrollComponent).attrs(
  (props): KeyboardAwareScrollViewProps => {
    return {
      contentContainerStyle: {
        paddingBottom: props.theme.dimensions.marginTopElementsForm,
        paddingLeft: props.theme.dimensions.marginHorizontal,
        paddingRight: props.theme.dimensions.marginHorizontal,
      },
    };
  },
)`
  flex: 1;
`;

export const ContainerView = styled(ContainerViewComponent)`
  flex: 1;
`;

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

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: ${(props: { theme: DefaultTheme }) =>
    props.theme.dimensions.marginTopElementsForm}px;
`;
