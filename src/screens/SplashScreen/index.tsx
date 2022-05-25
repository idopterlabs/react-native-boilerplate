import React from 'react';

import { ContainerView, LogoSvg, SplashScreenStatusBar } from './styles';

const SplashScreen = () => {
  return (
    <ContainerView>
      <SplashScreenStatusBar />
      <LogoSvg />
    </ContainerView>
  );
};

export default SplashScreen;
