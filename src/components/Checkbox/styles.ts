import styled from 'styled-components/native';
import { Text, Checkbox as CheckboxComponent } from 'react-native-paper';

export const Checkbox = styled(CheckboxComponent).attrs((props) => {
  return {
    color: props.theme.colors.primary,
  };
})`
  margin-bottom: 10px;
`;

export const BoxView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextCheckbox = styled(Text)`
  font-size: 18px;
`;
