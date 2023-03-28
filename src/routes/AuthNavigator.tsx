import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import NavigationBar from '@components/NavigationBar';

import { Login } from '@screens/Auth/Login';

import { AuthStackRouter } from '@typings/routes';

const AuthStack = createStackNavigator<AuthStackRouter>();

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
          animation: 'slide_from_left',
          headerShown: false,
          title: 'Login',
        })}
      />
    </AuthStack.Navigator>
  );
};
