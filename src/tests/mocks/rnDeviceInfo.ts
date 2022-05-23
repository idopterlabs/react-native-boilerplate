jest.mock('react-native-device-info', () => {
  return {
    getBuildNumber: jest.fn(),
    getVersion: jest.fn(),
  };
});

export {};
