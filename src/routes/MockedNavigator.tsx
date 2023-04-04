import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { shadowTheme } from '@tests/actions/styledTheme';

const AppStack = createStackNavigator();

interface Props {
  component(params?: any): JSX.Element;
  params?: any;
}

const MockedNavigator = ({ component, params = {} }: Props) => {
  return shadowTheme(
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="MockedScreen">
        <AppStack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
      </AppStack.Navigator>
    </NavigationContainer>,
  );
};

export default MockedNavigator;
