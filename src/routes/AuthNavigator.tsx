import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AuthRouter } from '@typings/routes';

import NavigationBar from '@components/NavigationBar';

import Login from '@screens/Auth/Login';

const AuthStack = createStackNavigator<AuthRouter>();

export default () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: (props) => <NavigationBar props={props} />,
      }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={() => ({
          animation: 'slide_from_right',
          headerShown: true,
          title: 'Login',
        })}
      />
    </AuthStack.Navigator>
  );
};
