import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { act, cleanup } from '@testing-library/react-native';
import { renderHook } from '@testing-library/react-hooks';

import {
  AuthContextProvider,
  useAuth,
  userInitialState,
} from '@contexts/AuthContext';

describe('Auth Context Provider', () => {
  beforeEach(async () => {
    AsyncStorage.clear();
    jest.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('should initialize context without user', async () => {
    const wrapper = ({ children }: any) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.isAuthenticated).toBeFalsy();
    expect(result.current.user).toBe(userInitialState);

    await act(async () => {});

    expect(result.current.isAuthenticated).toBeFalsy();
    expect(result.current.user).toBe(userInitialState);
  });

  it('should initialize context with user', async () => {
    const mockUser = {
      accessToken: 'test_access_token',
      idToken: '3119ee61-d7b5-4421-93c5-379f8c9ea684',
    };

    await AsyncStorage.setItem('user:data', JSON.stringify(mockUser));

    const wrapper = ({ children }: any) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {});

    expect(result.current.isAuthenticated).toBeTruthy();
    expect(result.current.user).toStrictEqual(mockUser);
  });

  it('should delete a user', async () => {
    const mockUser = {
      accessToken: 'test_access_token',
      idToken: '3119ee61-d7b5-4421-93c5-379f8c9ea684',
    };

    await AsyncStorage.setItem('user:data', JSON.stringify(mockUser));

    const wrapper = ({ children }: any) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    await act(async () => {});

    expect(result.current.isAuthenticated).toBeTruthy();
    expect(result.current.user).toStrictEqual(mockUser);

    await act(async () => {
      result.current.deleteUser();
    });

    expect(result.current.isAuthenticated).toBeFalsy();
    expect(result.current.user).toBe(userInitialState);

    const storageUser = await AsyncStorage.getItem('user:data');
    expect(storageUser).toEqual(null);
  });

  it('should create a user', async () => {
    const mockUser = {
      accessToken: 'test_access_token',
      idToken: '3119ee61-d7b5-4421-93c5-379f8c9ea684',
    };

    const wrapper = ({ children }: any) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    );

    const { result } = renderHook(() => useAuth(), { wrapper });

    expect(result.current.isAuthenticated).toBeFalsy();

    await act(async () => {});

    expect(result.current.isAuthenticated).toBeFalsy();
    expect(result.current.user).toBe(userInitialState);

    await act(async () => {
      result.current.saveUser(mockUser, false);
    });

    expect(result.current.isAuthenticated).toBeTruthy();
    expect(result.current.user).toStrictEqual(mockUser);
  });
});
