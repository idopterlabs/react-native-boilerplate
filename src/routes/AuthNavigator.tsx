import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@screens/Auth/Login';

import { AuthStackRouter } from '@typings/routes';

const AuthStack = createNativeStackNavigator<AuthStackRouter>();

export default () => {
  const themeContext = useContext(ThemeContext);

  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={() => ({
          animation: 'slide_from_left',
          headerShown: true,
          headerStyle: {
            backgroundColor: themeContext.colors.stackBackground,
          },
        })}
      />
    </AuthStack.Navigator>
  );
};
