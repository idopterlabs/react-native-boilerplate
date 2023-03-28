import styled from 'styled-components/native';

import { Text } from 'react-native-paper';

import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

import Logo from '@assets/svg/logoLight.svg';
import ContainerScrollInFlatList from '@components/ContainerScrollInFlatList';

import { ContainerView as ContainerViewComponent } from '@theme/common';

export const ContainerScroll = styled(ContainerScrollInFlatList).attrs(
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

export const ContentView = styled.View``;

export const TitleText = styled(Text)`
  margin-top: 10px;
  width: 100%;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`;

export const LogoSvg = styled(Logo).attrs({
  width: '100%',
  preserveAspectRatio: 'xMidYMid',
})`
  margin-top: 10px;
`;

export const VersionView = styled.View`
  width: 100%;
  justify-content: flex-end;
  margin-bottom: 4px;
`;

export const VersionText = styled(Text)`
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.onSurfaceVariant};
`;
