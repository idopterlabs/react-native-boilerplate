import React from 'react';

import { render } from '@testing-library/react-native';

import { shadowTheme } from '@tests/actions/styledTheme';

import ContainerScrollInFlatList from './index';

describe('ContainerScrollInFlatList component', () => {
  it('should render correctly', async () => {
    render(
      shadowTheme(
        <ContainerScrollInFlatList
          onRefresh={() => {}}
          onEndReached={() => {}}
          isLoading={true}>
          <></>
        </ContainerScrollInFlatList>,
      ),
    );
  });
});
