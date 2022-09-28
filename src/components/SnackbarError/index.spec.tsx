import React, { useRef } from 'react';
import { act, cleanup, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { shadowTheme } from '@tests/actions/styledTheme';

import SnackbarError, { Handle } from './index';

jest.useFakeTimers('legacy');

describe('Snackbar Error component', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllTimers();
  });

  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
  });

  it('should render component correctly', () => {
    render(shadowTheme(<SnackbarError />));
    render(shadowTheme(<SnackbarError currentPosition="bottom" />));
  });

  it('should show error message', async () => {
    let snackbarErrorRef: React.RefObject<Handle> | undefined;
    const callback = jest.fn();

    const Component = () => {
      snackbarErrorRef = useRef<Handle | null>(null);
      return <SnackbarError ref={snackbarErrorRef} />;
    };

    const { getByText, queryByText } = render(shadowTheme(<Component />));

    expect(queryByText('Title error')).toBeNull();

    await act(async () => {
      snackbarErrorRef?.current?.show({
        title: 'Title error',
        callback: callback,
      });
    });

    expect(callback).toBeCalledTimes(0);
    getByText('Title error');
  });
});
