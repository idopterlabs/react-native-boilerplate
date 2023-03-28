import React from 'react';

import { getAppVersion } from '@utils/device';

import {
  ContainerScroll,
  ContainerView,
  VersionView,
  VersionText,
  TitleText,
  LogoSvg,
} from './styles';

export const Home = () => {
  return (
    <ContainerView>
      <ContainerScroll>
        <TitleText>Home </TitleText>
        <LogoSvg />
      </ContainerScroll>
      <VersionView>
        <VersionText>v{getAppVersion()}</VersionText>
      </VersionView>
    </ContainerView>
  );
};
