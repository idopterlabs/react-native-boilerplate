import React from 'react';

import '@testing-library/jest-native/extend-expect';
import { act, cleanup, fireEvent, render } from '@testing-library/react-native';

import { shadowTheme } from '@tests/actions/styledTheme';

import ListEmptyLabel from './ListEmptyLabel';

import Select from './index';

jest.useFakeTimers('legacy');

describe('Select component', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should render component correctly', () => {
    render(shadowTheme(<Select data={[]} labelField={''} valueField={''} />));
    render(shadowTheme(<ListEmptyLabel isSelect={false} />));
  });

  it('should return value to on value change', async () => {
    const options = [
      {
        label: 'a',
        value: '1',
      },
      {
        label: 'b',
        value: '2',
      },
    ];

    const onValueChangeMock = jest.fn().mockImplementation(() => {});
    const { getByTestId } = render(
      shadowTheme(
        <Select
          testID="select"
          data={options}
          onValueChange={onValueChangeMock}
          labelField="label"
          valueField="value"
        />,
      ),
    );

    await act(async () => {
      const SelectView = await getByTestId('select');

      await fireEvent(SelectView, 'onChange', options[0]);
    });

    expect(onValueChangeMock).toHaveBeenCalledTimes(1);
    expect(onValueChangeMock).toHaveBeenLastCalledWith(options[0]);
  });
});
