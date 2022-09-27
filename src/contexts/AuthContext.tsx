import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { User } from '@typings/common';

import { setAccessToken } from '@services/api';

export interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  isLoading: boolean;
  saveUser: (user: User, isUsedCached?: boolean) => Promise<void>;
  deleteUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(userInitialState);
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveUser = async (newUser: User, isUsedCached: boolean = false) => {
    const token = newUser?.accessToken;
    setAccessToken(token);

    if (!isUsedCached) {
      await AsyncStorage.setItem('user:data', JSON.stringify(newUser));
    }

    setUser(newUser);
    setAuthenticated(!!newUser?.accessToken);
  };

  const loadStorageData = async () => {
    const userCached = await AsyncStorage.getItem('user:data');
    if (userCached) {
      await saveUser(JSON.parse(userCached), true);
    }

    setLoading(false);
  };

  const deleteUser = async () => {
    await AsyncStorage.removeItem('user:data');
    setUser(userInitialState);
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, user, saveUser, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export const userInitialState: User = {
  accessToken: '',
  idToken: '',
};

export default AuthContext;
