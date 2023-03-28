import React from 'react';

import { act, fireEvent, render } from '@testing-library/react-native';

import { shadowTheme } from '@tests/actions/styledTheme';

import { InfoPage } from '@typings/common';

import PagesCard from '.';

describe('Pages Card component', () => {
  it('should render correctly', async () => {
    const infoPage: InfoPage = {
      currentPage: 123,
      totalEntries: 100,
      totalPages: 321,
    };

    const { getByText, queryByText } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={(): void => {}} />,
      ),
    );

    expect(queryByText('Title error')).toBeNull();
    expect(queryByText('Nenhum resultado encontrado')).toBeNull();

    getByText('Página atual');
    getByText('123');
    getByText('Total de itens encontrados: 100');
    getByText('321');
  });

  it('should show not found title when total entries is zero', async () => {
    const infoPage: InfoPage = {
      currentPage: 0,
      totalEntries: 0,
      totalPages: 0,
    };

    const { getByText, queryByText } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={(): void => {}} />,
      ),
    );

    expect(queryByText('Página atual')).toBeNull();
    expect(queryByText('0')).toBeNull();

    getByText('Nenhum resultado encontrado');
    getByText('Total de itens encontrados: 0');
  });

  it('should open start page', async () => {
    const onChangePage = jest.fn().mockImplementation(() => {});
    const infoPage: InfoPage = {
      currentPage: 5,
      totalEntries: 25,
      totalPages: 10,
    };

    const { getByText } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={onChangePage} />,
      ),
    );

    expect(onChangePage).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(getByText('1'));
    });

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenLastCalledWith(1);
  });

  it('should open end page', async () => {
    const onChangePage = jest.fn().mockImplementation(() => {});
    const infoPage: InfoPage = {
      currentPage: 5,
      totalEntries: 25,
      totalPages: 10,
    };

    const { getByText } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={onChangePage} />,
      ),
    );

    expect(onChangePage).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(getByText('10'));
    });

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenLastCalledWith(10);
  });

  it('should open reload page', async () => {
    const onChangePage = jest.fn().mockImplementation(() => {});
    const infoPage: InfoPage = {
      currentPage: 5,
      totalEntries: 25,
      totalPages: 10,
    };

    const { getByText } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={onChangePage} />,
      ),
    );

    expect(onChangePage).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(getByText('5'));
    });

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenLastCalledWith(5);
  });

  it('should open back page', async () => {
    const onChangePage = jest.fn().mockImplementation(() => {});
    const infoPage: InfoPage = {
      currentPage: 5,
      totalEntries: 25,
      totalPages: 10,
    };

    const { getByTestId } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={onChangePage} />,
      ),
    );

    expect(onChangePage).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(getByTestId('pagesCard:backPage'));
    });

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenLastCalledWith(4);
  });

  it('should open next page', async () => {
    const onChangePage = jest.fn().mockImplementation(() => {});
    const infoPage: InfoPage = {
      currentPage: 5,
      totalEntries: 25,
      totalPages: 10,
    };

    const { getByTestId } = render(
      shadowTheme(
        <PagesCard infoPage={infoPage} onChangePage={onChangePage} />,
      ),
    );

    expect(onChangePage).toHaveBeenCalledTimes(0);

    await act(async () => {
      await fireEvent.press(getByTestId('pagesCard:nextPage'));
    });

    expect(onChangePage).toHaveBeenCalledTimes(1);
    expect(onChangePage).toHaveBeenLastCalledWith(6);
  });
});
