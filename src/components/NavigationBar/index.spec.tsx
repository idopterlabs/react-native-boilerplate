import React from 'react';

import { render } from '@testing-library/react-native';

import { shadowTheme } from '@tests/actions/styledTheme';

import NavigationBar from '.';

describe('Pages Card component', () => {
  it('should render correctly', async () => {
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
            options: {
              title: 'TITLE',
              // @ts-ignore
              actions: [{ iconName: 'logout', onPress: () => {} }],
            },
            // @ts-ignore
            route: undefined,
            // @ts-ignore
            navigation: undefined,
            // @ts-ignore
            styleInterpolator: () => {},
          }}
        />,
      ),
    );

    getByText('TITLE');
  });
});
