import React from 'react';

import { act, cleanup, render } from '@testing-library/react-native';

import MockedNavigator from '@routes/MockedNavigator';
import { alertSpy } from '@tests/actions/alertSpy';
import { mockedNavigate } from '@tests/mocks/rnNavigation';

import Home from './index';

jest.mock('@services/api');

describe('Home Screen', () => {
  afterEach(() => {
    cleanup();
    alertSpy.mockClear();
    mockedNavigate.mockClear();
  });

  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', async () => {
    render(<MockedNavigator component={Home} />);
    await act(async () => {});
  });
});
