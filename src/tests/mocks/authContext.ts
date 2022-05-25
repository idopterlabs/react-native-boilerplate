export const mockedUpdateStateUser = jest.fn();
jest.mock('@contexts/AuthContext', () => {
  return {
    useAuth: () => {
      return {
        saveUser: async () => {
          mockedUpdateStateUser();
        },
        deleteUser: async () => {
          mockedUpdateStateUser();
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
