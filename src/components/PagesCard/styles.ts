import styled from 'styled-components/native';
import {
  Text,
  Surface,
  Button,
  IconButton,
  ButtonProps,
  IconButtonProps,
} from 'react-native-paper';

export const ContainerView = styled(Surface).attrs({
  elevation: 5,
})`
  width: 100%;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  padding: ${(props) => props.theme.dimensions.paddingContent}px;
  padding-left: ${(props) => props.theme.dimensions.marginHorizontal}px;
  padding-right: ${(props) => props.theme.dimensions.marginHorizontal}px;
  background: ${(props) => props.theme.colors.background};
`;

export const MenuItensView = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const TitleText = styled(Text).attrs({
  variant: 'labelMedium',
})`
  width: 100%;
  text-align: center;
`;

export const TotalItemText = styled(Text).attrs({
  variant: 'labelSmall',
})`
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
  width: 100%;
  text-align: left;
`;

export const ChangePageNumberButton = styled(Button).attrs(
  (props): Omit<ButtonProps, 'children'> => {
    return {
      mode: 'text',
      contentStyle: {
        justifyContent: 'center',
      },
      labelStyle: props.theme.fonts.labelSmall,
      compact: true,
      textColor: props.theme.colors.onSurfaceVariant,
    };
  },
)``;

export const CurrentPageNumberButton = styled(Button).attrs(
  (props): Omit<ButtonProps, 'children'> => {
    return {
      mode: 'text',
      contentStyle: {
        justifyContent: 'center',
      },
      compact: true,
      textColor: props.theme.colors.text,
    };
  },
)``;

export const NextPageButton = styled(IconButton).attrs(
  (props): IconButtonProps => {
    return {
      icon: 'chevron-right',
      iconColor: props.theme.colors.primary,
    };
  },
)``;

export const BackPageButton = styled(IconButton).attrs(
  (props): IconButtonProps => {
    return {
      icon: 'chevron-left',
      iconColor: props.theme.colors.primary,
    };
  },
)``;
