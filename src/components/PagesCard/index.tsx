import React from 'react';

import { StyleProp, ViewStyle } from 'react-native';

import { InfoPage } from '@typings/common';

import {
  ContainerView,
  CurrentPageNumberButton,
  ChangePageNumberButton,
  MenuItensView,
  NextPageButton,
  BackPageButton,
  TotalItemText,
  TitleText,
} from './styles';

interface Props {
  infoPage: InfoPage;
  onChangePage: (page: number) => void;
  style?: StyleProp<ViewStyle> | undefined;
  testID?: string;
}

const PagesCard = ({
  infoPage,
  onChangePage,
  testID = 'pagesCard',
  ...props
}: Props) => {
  const onStartPage = () => {
    onChangePage(1);
  };

  const onNextPage = () => {
    if (infoPage.currentPage >= infoPage.totalPages) {
      onChangePage(infoPage.totalPages);
      return;
    }

    onChangePage(infoPage.currentPage + 1);
  };

  const onReloadPage = () => {
    onChangePage(infoPage.currentPage);
  };

  const onBackPage = () => {
    if (infoPage.currentPage <= 0) {
      onChangePage(1);
      return;
    }

    onChangePage(infoPage.currentPage - 1);
  };

  const onEndPage = () => {
    onChangePage(infoPage.totalPages);
  };

  return (
    <ContainerView {...props}>
      <>
        {infoPage.totalEntries <= 0 && (
          <TitleText>Nenhum resultado encontrado</TitleText>
        )}
        {infoPage.totalEntries > 0 && (
          <>
            <TitleText>Página atual</TitleText>
            <MenuItensView>
              <ChangePageNumberButton
                onPress={onStartPage}
                testID={`${testID}:startPage`}>
                1
              </ChangePageNumberButton>
              <BackPageButton
                onPress={onBackPage}
                testID={`${testID}:backPage`}
              />
              <CurrentPageNumberButton
                onPress={onReloadPage}
                testID={`${testID}:reloadPage`}>
                {infoPage.currentPage}
              </CurrentPageNumberButton>
              <NextPageButton
                onPress={onNextPage}
                testID={`${testID}:nextPage`}
              />
              <ChangePageNumberButton
                onPress={onEndPage}
                testID={`${testID}:endPage`}>
                {infoPage.totalPages}
              </ChangePageNumberButton>
            </MenuItensView>
          </>
        )}
        <TotalItemText>
          Total de itens encontrados: {infoPage.totalEntries}
        </TotalItemText>
      </>
    </ContainerView>
  );
};

export default PagesCard;
