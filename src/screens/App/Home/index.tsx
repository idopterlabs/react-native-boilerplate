import React from 'react';

import featuresFlag from '@configs/featuresFlag';

import { ContainerScroll, ContainerView, TitleText, LogoSvg } from './styles';

const Login = () => {
  return (
    <ContainerView>
      <ContainerScroll>
        <TitleText>App</TitleText>
        {featuresFlag.logo && <LogoSvg />}
      </ContainerScroll>
    </ContainerView>
  );
};

export default Login;
