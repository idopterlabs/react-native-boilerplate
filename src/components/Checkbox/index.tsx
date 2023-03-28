import React from 'react';

import { BoxView, Checkbox as CheckboxComponent, TextCheckbox } from './styles';

type Props = {
  text?: string;
  onPress(isChecked: boolean): void;
  isActive: boolean;
  testID?: string;
};

const Checkbox = ({
  onPress,
  isActive,
  text = 'checkbox test',
  testID = 'checkbox:view',
}: Props) => {
  return (
    <BoxView>
      <CheckboxComponent
        testID={testID}
        status={isActive ? 'checked' : 'unchecked'}
        onPress={() => {
          onPress(isActive);
        }}
      />
      <TextCheckbox>{text}</TextCheckbox>
    </BoxView>
  );
};
export default Checkbox;
