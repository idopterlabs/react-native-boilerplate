import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { AppRouter } from '@typings/routes';

import NavigationBar from '@components/NavigationBar';

import { useAuth } from '@contexts/AuthContext';

import Home from '@screens/App/Home';

const AppStack = createStackNavigator<AppRouter>();

export default () => {
  const { deleteUser } = useAuth();

  const onLogout = () => {
    deleteUser();
  };

  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <NavigationBar props={props} />,
      }}>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          animation: 'slide_from_right',
          headerShown: true,
          title: 'Template',
          actions: [{ iconName: 'logout', onPress: onLogout }],
        })}
      />
    </AppStack.Navigator>
  );
};
