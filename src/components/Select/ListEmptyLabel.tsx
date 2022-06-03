import React from 'react';
import { ListEmptyLabelContainerView, ListEmptyLabelText } from './styles';

interface Props {
  isSelect: boolean;
}

export default ({ isSelect }: Props) => (
  <ListEmptyLabelContainerView>
    <ListEmptyLabelText isSelect={isSelect}>
      Sem dados no momento
    </ListEmptyLabelText>
  </ListEmptyLabelContainerView>
);
