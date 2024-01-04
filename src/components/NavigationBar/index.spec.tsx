import React from 'react';

import { act, fireEvent, render } from '@testing-library/react-native';

import { shadowTheme } from '@tests/actions/styledTheme';

import NavigationBar from '.';

describe('Pages Card component', () => {
  it('should render correctly', async () => {
    const { getByText, getByTestId } = render(
      shadowTheme(
        <NavigationBar
          props={{
            layout: {
              width: 0,
              height: 0,
            },
            back: { title: 'home' },
            progress: {
              // @ts-ignore
              current: undefined,
              next: undefined,
              previous: undefined,
            },
            options: {
              title: 'TITLE',
              // @ts-ignore
              actions: [{ iconName: 'logout', onPress: () => {} }],
            },
            // @ts-ignore
            route: undefined,
            // @ts-ignore
            navigation: {
              goBack: () => {},
            },
            // @ts-ignore
            styleInterpolator: () => {},
          }}
        />,
      ),
    );

    getByText('TITLE');
    getByTestId('appBarActionView:navigationBar:back');
    getByTestId('appBarActionView:navigationBar:logout');
  });

  it('should show default title when there was no title', async () => {
    const { getByText } = render(
      shadowTheme(
        <NavigationBar
          props={{
            layout: {
              width: 0,
              height: 0,
            },
            back: undefined,
            progress: {
              // @ts-ignore
              current: undefined,
              next: undefined,
              previous: undefined,
            },
            options: {},
            // @ts-ignore
            route: undefined,
            // @ts-ignore
            navigation: {},
            // @ts-ignore
            styleInterpolator: () => {},
          }}
        />,
      ),
    );

    getByText('Dashboard');
  });

  it('should emit event click in back button', async () => {
    const mockOnClick = jest.fn().mockImplementation(() => {});

    const { getByTestId } = render(
      shadowTheme(
        <NavigationBar
          props={{
            layout: {
              width: 0,
              height: 0,
            },
            back: { title: 'home' },
            progress: {
              // @ts-ignore
              current: undefined,
              next: undefined,
              previous: undefined,
            },
            options: {
              title: 'TITLE',
            },
            // @ts-ignore
            route: undefined,
            // @ts-ignore
            navigation: {
              goBack: mockOnClick,
            },
            // @ts-ignore
            styleInterpolator: () => {},
          }}
        />,
      ),
    );

    expect(mockOnClick).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(
        await getByTestId('appBarActionView:navigationBar:back'),
      );
    });

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should emit event click in action buttons', async () => {
    const mockOnClick = jest.fn().mockImplementation(() => {});

    const { getByTestId } = render(
      shadowTheme(
        <NavigationBar
          props={{
            layout: {
              width: 0,
              height: 0,
            },
            back: { title: 'home' },
            progress: {
              // @ts-ignore
              current: undefined,
              next: undefined,
              previous: undefined,
            },
            options: {
              title: 'TITLE',
              // @ts-ignore
              actions: [{ iconName: 'logout', onPress: mockOnClick }],
            },
            // @ts-ignore
            route: undefined,
            // @ts-ignore
            navigation: {
              goBack: () => {},
            },
            // @ts-ignore
            styleInterpolator: () => {},
          }}
        />,
      ),
    );

    expect(mockOnClick).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(
        await getByTestId('appBarActionView:navigationBar:logout'),
      );
    });

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
