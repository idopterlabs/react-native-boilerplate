import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { withThemeProvider } from '@tests/actions/styledTheme';

const AppStack = createNativeStackNavigator();

interface Props {
  component(params?: any): JSX.Element;
  params?: any;
}

const MockedNavigator = ({ component, params = {} }: Props) => {
  const Providers: React.FC = (props) => withThemeProvider(component, props);

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
