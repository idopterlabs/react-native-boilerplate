/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Center, NativeBaseProvider } from 'native-base';
import React from 'react';
import styled from 'styled-components/native';
import StrokeAnimation from './components/StrokeAnimation';

import envs from './utils/envs';

const TitleTemplate = styled.Text`
  margin-top: 120px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const TitleTemplateEnglish = styled.Text`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
`;

const App = () => {
  const ENV = envs.get('ENV');
  console.log(ENV);

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <TitleTemplate>
          🇧🇷 Template com as configurações mínimas comumente utilizadas pelo
          time Idopter Labs para iniciar um projeto novo com react native
        </TitleTemplate>
        <TitleTemplateEnglish>
          🇺🇸 Template with the minimum settings commonly used by Idopter Labs
          team to start a new project with react native
        </TitleTemplateEnglish>
        <StrokeAnimation />
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
