import styled from 'styled-components/native';

import InputComponent from '@components/Input';
import SelectComponent from '@components/Select';
import { DefaultButton } from '@theme/common';

export const FormView = styled.View`
  width: 100%;
  height: 250px;
`;

export const Input = styled(InputComponent)`
  width: 100%;
`;

export const LoginButton = styled(DefaultButton)`
  margin-top: ${(props) => props.theme.dimensions.marginTopButton}px;
  width: 100%;
`;

export const Select = styled(SelectComponent)`
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
  width: 100%;
`;
