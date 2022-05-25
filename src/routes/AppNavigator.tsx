import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@screens/App/Home';

import { AppStackRouter } from '@typings/routes';

import theme from '@theme/index';

import { useAuth } from '@contexts/AuthContext';

const AppStack = createNativeStackNavigator<AppStackRouter>();

export default () => {
  const { deleteUser } = useAuth();

  const onLogout = () => {
    deleteUser();
  };

  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          animation: 'slide_from_right',
          headerShown: true,
          headerTitle: 'Template',
          headerBackVisible: false,
          headerRight: () => (
            <IconMaterialCommunityIcons
              onPress={onLogout}
              name="logout"
              size={30}
              color="#000"
            />
          ),
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
        })}
      />
    </AppStack.Navigator>
  );
};
