import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { setAccessToken } from '@services/api';
import { User } from '@typings/common';

import Storage from '@utils/storage';

export const StorageKeys = {
  user: 'user:data',
};

interface Props {
  children?: ReactNode;
}

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

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
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
      await Storage.setObject<User>(StorageKeys.user, newUser);
    }

    setUser(newUser);
    setAuthenticated(!!newUser?.accessToken);
  };

  const loadStorageData = async () => {
    const userCached = await Storage.getObject<User>(StorageKeys.user);
    if (userCached) {
      await saveUser(userCached, true);
    }

    setLoading(false);
  };

  const deleteUser = async () => {
    await Storage.clear(StorageKeys.user);
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
