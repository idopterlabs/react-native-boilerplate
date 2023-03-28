import React from 'react';

import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react-native';

import MockedNavigator from '@routes/MockedNavigator';
import { alertSpy } from '@tests/actions/alertSpy';

import { mockedUpdateStateUser } from '@tests/mocks/authContext';
import { mockedNavigate } from '@tests/mocks/rnNavigation';

import exampleMethodName from '@tests/responses/exampleMethodName';

import { states } from '@utils/lists';

import { Login } from './index';

jest.mock('@services/api');

describe('Login Screen', () => {
  afterEach(() => {
    cleanup();
    alertSpy.mockClear();
    mockedNavigate.mockClear();
    mockedUpdateStateUser.mockClear();
  });

  beforeEach(() => {
    cleanup();
  });

  it('should render correctly', async () => {
    render(<MockedNavigator component={Login} />);
    await act(async () => {});
  });

  it('should show error for empty fields', async () => {
    const exampleMethodNameMocked = exampleMethodName.withSuccess();

    const { getByText } = render(<MockedNavigator component={Login} />);

    await act(async () => {
      const RegisterButton = await getByText('Entrar');

      await fireEvent.press(RegisterButton);
    });

    getByText('Telefone é obrigatório');
    getByText('Estado é obrigatório');

    expect(mockedUpdateStateUser).toBeCalledTimes(0);
    expect(exampleMethodNameMocked.mock).toBeCalledTimes(0);
  });

  it('should open page of login with request success', async () => {
    const exampleMethodNameMocked = exampleMethodName.withSuccess();

    const { getByText, queryByText, getByTestId } = render(
      <MockedNavigator component={Login} />,
    );

    await act(async () => {
      await fireEvent.changeText(
        await getByTestId('textInput:phoneNumber'),
        '12345678910',
      );

      await fireEvent(await getByTestId('select:state'), 'onChange', states[0]);
    });

    await act(async () => {
      const RegisterButton = await getByText('Entrar');

      await fireEvent.press(RegisterButton);
    });

    expect(queryByText('Telefone é obrigatório')).toBeNull();
    expect(queryByText('Estado é obrigatório')).toBeNull();

    expect(exampleMethodNameMocked.mock).toBeCalledTimes(1);
    expect(mockedUpdateStateUser).toBeCalledTimes(1);
    expect(mockedUpdateStateUser).toHaveBeenLastCalledWith({
      accessToken: '4c0393ae35e1.4fb787d.564f2d02eba0e.3c3237aba0944c0',
      idToken: '924af6cd-3e53-40dc-a89d-054cd90307a3',
    });
  });

  it('should open page of login with request failed', async () => {
    const exampleMethodNameMocked = exampleMethodName.withFailed();

    const { getByText, queryByText, getByTestId } = render(
      <MockedNavigator component={Login} />,
    );

    await act(async () => {
      await fireEvent.changeText(
        await getByTestId('textInput:phoneNumber'),
        '12345678910',
      );

      await fireEvent(await getByTestId('select:state'), 'onChange', states[0]);
    });

    await act(async () => {
      const RegisterButton = await getByText('Entrar');

      await fireEvent.press(RegisterButton);
    });

    expect(queryByText('Telefone é obrigatório')).toBeNull();
    expect(queryByText('Estado é obrigatório')).toBeNull();

    expect(exampleMethodNameMocked.mock).toBeCalledTimes(1);

    await act(async () => {
      await waitFor(() => alertSpy);

      expect(alertSpy).toHaveBeenCalledTimes(1);
      expect(alertSpy).toHaveBeenLastCalledWith(
        'Não foi possível realizar o login',
        'Não foi possível obter dados',
        expect.anything(),
        expect.anything(),
      );
    });

    // TODO: change this to 0
    expect(mockedUpdateStateUser).toBeCalledTimes(1);
  });
});
