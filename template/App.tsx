/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NativeBaseProvider } from 'native-base';
import React from 'react';

import StrokeAnimation from './src/components/StrokeAnimation';

import envs from './src/utils/envs';

const App = () => {
  const ENV = envs.get('ENV');
  console.log(ENV);

  return (
    <NativeBaseProvider>
      <StrokeAnimation />
    </NativeBaseProvider>
  );
};

export default App;
