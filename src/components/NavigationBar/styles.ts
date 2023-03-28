import styled from 'styled-components/native';

import { Appbar as AppbarPaper } from 'react-native-paper';

export const AppBarContainerView = styled(AppbarPaper.Header).attrs({
  elevated: false,
})`
  background: ${(props) => props.theme.colors.surface};
`;

export const AppBarTitleView = styled(AppbarPaper.Content).attrs((props) => {
  return {
    color: props.theme.colors.text,
    titleStyle: { fontWeight: 'bold' },
  };
})`
  align-items: flex-start;
  padding: ${(props) => props.theme.dimensions.paddingContent}px;
`;

export const AppBarBackActionView = styled(AppbarPaper.BackAction).attrs(
  (props) => {
    return {
      color: props.theme.colors.secondary,
    };
  },
)``;

export const AppBarActionView = styled(AppbarPaper.Action).attrs((props) => {
  return {
    color: props.theme.colors.text,
  };
})``;
