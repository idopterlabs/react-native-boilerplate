import React from 'react';

import { act, cleanup, fireEvent, render } from '@testing-library/react-native';

import { alertSpy } from '@tests/actions/alertSpy';
import { mockedNavigate } from '@tests/mocks/rnNavigation';

import MockedNavigator from '@routes/MockedNavigator';

import Login from './index';

jest.mock('@services/api');

describe('Login Screen', () => {
  afterEach(() => {
    cleanup();
    alertSpy.mockClear();
    mockedNavigate.mockClear();
  });

  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', async () => {
    render(<MockedNavigator component={Login} />);
    await act(async () => {});
  });

  it('should show error for empty fields', async () => {
    const { getByText } = render(<MockedNavigator component={Login} />);

    await act(async () => {
      const RegisterButton = await getByText('Entrar');
      await fireEvent.press(RegisterButton);
    });

    getByText('Telefone é obrigatório');
    getByText('Estado é obrigatório');
  });
});
