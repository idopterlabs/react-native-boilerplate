import React from 'react';

import { ContainerScroll, ContainerView, TitleText, LogoSvg } from './styles';

const Login = () => {
  return (
    <ContainerView>
      <ContainerScroll>
        <TitleText>App</TitleText>
        <LogoSvg />
      </ContainerScroll>
    </ContainerView>
  );
};

export default Login;
