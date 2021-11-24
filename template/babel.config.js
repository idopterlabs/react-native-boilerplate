module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module:react-native-dotenv',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '@': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
