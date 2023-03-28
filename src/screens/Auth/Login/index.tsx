import React, { useContext } from 'react';

import { ThemeContext, DefaultTheme } from 'styled-components/native';

import { Loading } from '@components/Loading';

import { getAppVersion } from '@utils/device';

import { Form } from './components/Form';

import {
  ContainerScroll,
  ContainerView,
  TitleText,
  LogoLightView,
  LogoDarkView,
  VersionView,
  VersionText,
} from './styles';
import { useViewModel } from './useViewModel';

export const Login = () => {
  const themeContext: DefaultTheme = useContext<DefaultTheme>(ThemeContext);

  const controller = useViewModel();

  return (
    <ContainerScroll>
      <ContainerView>
        {themeContext.colorScheme === 'dark' ? (
          <LogoDarkView />
        ) : (
          <LogoLightView />
        )}
        <TitleText>Bem-vindo</TitleText>

        {controller.isLoading ? (
          <Loading />
        ) : (
          <Form onSubmit={controller.handleSubmit} />
        )}

        <VersionView>
          <VersionText>v{getAppVersion()}</VersionText>
        </VersionView>
      </ContainerView>
    </ContainerScroll>
  );
};
