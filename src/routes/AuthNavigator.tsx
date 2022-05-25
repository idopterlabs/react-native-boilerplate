import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Auth/Login';

import theme from '@theme/index';

import { AuthStackRouter } from '@typings/routes';

const AuthStack = createNativeStackNavigator<AuthStackRouter>();

export default () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen
      name="Login"
      component={Login}
      options={() => ({
        animation: 'slide_from_left',
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
      })}
    />
  </AuthStack.Navigator>
);
