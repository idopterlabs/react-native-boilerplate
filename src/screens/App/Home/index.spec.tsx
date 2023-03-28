import React from 'react';

import { act, cleanup, fireEvent, render } from '@testing-library/react-native';

import MockedNavigator from '@routes/MockedNavigator';

import { mockedUpdateStateUser } from '@tests/mocks/authContext';
import { mockedNavigate } from '@tests/mocks/rnNavigation';

import Home from './index';

jest.useFakeTimers('legacy');
jest.mock('@contexts/AuthContext');
jest.mock('@services/api');

describe('Home Screen', () => {
  beforeEach(() => {
    cleanup();
    mockedNavigate.mockClear();
    mockedUpdateStateUser.mockClear();
  });

  afterEach(cleanup);

  it('should render correctly', async () => {
    render(<MockedNavigator component={Home} />);

    await act(async () => {});
  });

  it('should open bordero correctly', async () => {
    const { getByTestId } = render(<MockedNavigator component={Home} />);

    await act(async () => {});

    const button = getByTestId('button:openBordero');

    await fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('BorderoList');
  });

  it('should open payment correctly', async () => {
    const { getByTestId } = render(<MockedNavigator component={Home} />);

    await act(async () => {});

    const button = getByTestId('button:openPayment');

    await fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('PaymentCameraScan');
  });

  it('should open user list correctly', async () => {
    const { getByTestId } = render(<MockedNavigator component={Home} />);

    await act(async () => {});

    const button = getByTestId('button:openUserList');

    await fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('UserList');
  });

  it('should open pending orders list correctly', async () => {
    const { getByTestId } = render(<MockedNavigator component={Home} />);

    await act(async () => {});

    const button = getByTestId('button:openOrders');

    await fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedNavigate).toHaveBeenCalledWith('PendingList');
  });
});
