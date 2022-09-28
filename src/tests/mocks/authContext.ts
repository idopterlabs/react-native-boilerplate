import { User } from '@typings/common';

export const mockedUpdateStateUser = jest.fn();
jest.mock('@contexts/AuthContext', () => {
  return {
    useAuth: () => {
      return {
        saveUser: async (user: User) => {
          mockedUpdateStateUser(user);
        },
        deleteUser: async () => {
          mockedUpdateStateUser('delete');
        },
        user: {
          accessToken: 'Test',
          idToken: 'cac4c7f5-deab-40ec-8916-3ba8c974e912',
        },
        isAuthenticated: true,
        isLoading: true,
      };
    },
  };
});

export {};
