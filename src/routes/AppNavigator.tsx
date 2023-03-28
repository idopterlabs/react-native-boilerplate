import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import NavigationBar from '@components/NavigationBar';
import { useAuth } from '@contexts/AuthContext';
import { Home } from '@screens/App/Home';

import { AppStackRouter } from '@typings/routes';

const AppStack = createStackNavigator<AppStackRouter>();

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
          title: 'App Template',
          actions: [{ iconName: 'logout', onPress: onLogout }],
        })}
      />
    </AppStack.Navigator>
  );
};
