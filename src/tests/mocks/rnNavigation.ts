export const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      ...actualNav.useNavigation(),
      navigate: mockedNavigate,
      dispatch: mockedNavigate,
    }),
  };
});

export {};
