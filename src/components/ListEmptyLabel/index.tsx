import React from 'react';
import { Container, Text } from './styles';

interface Props {
  isSelect: boolean;
}

export default ({ isSelect }: Props) => (
  <Container>
    <Text isSelect={isSelect}>Sem dados no momento</Text>
  </Container>
);
