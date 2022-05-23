jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn(() => {}),
  };
});

export {};
