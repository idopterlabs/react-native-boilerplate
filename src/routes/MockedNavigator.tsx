import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeProvider } from 'styled-components/native';

import theme from '@theme/index';

const AppStack = createNativeStackNavigator();

interface Props {
  component(params?: any): JSX.Element;
  params?: any;
}

const MockedNavigator = ({ component, params = {} }: Props) => {
  const Providers: React.FC = (props) => (
    <ThemeProvider theme={theme}>{component(props)}</ThemeProvider>
  );

  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="MockedScreen">
        <AppStack.Screen
          name="MockedScreen"
          component={Providers}
          initialParams={params}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
