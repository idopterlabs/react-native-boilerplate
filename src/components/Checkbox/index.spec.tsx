import React from 'react';

import { render } from '@testing-library/react-native';

import { shadowTheme } from '@tests/actions/styledTheme';

import Checkbox from './index';

describe('Checkbox component', () => {
  it('should render correctly', async () => {
    const { getByText } = render(
      shadowTheme(<Checkbox isActive={false} onPress={() => {}} />),
    );
    await getByText('checkbox test');
  });
});
