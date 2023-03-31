const presets = ['module:metro-react-native-babel-preset'];
const plugins = [
  [
    'module:react-native-dotenv',
    {
      envName: 'APP_ENV',
      moduleName: '@env',
      path: '.env',
      blocklist: null,
      allowlist: null,
      safe: false,
      allowUndefined: true,
      verbose: false,
    },
  ],
];

plugins.push([
  'module-resolver',
  {
    root: ['./src'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@assets': './src/assets',
      '@components': './src/components',
      '@configs': './src/configs',
      '@contexts': './src/contexts',
      '@theme': './src/theme',
      '@typings': './src/typings',
      '@routes': './src/routes',
      '@services': './src/services',
      '@screens': './src/screens',
      '@utils': './src/utils',
      '@tests': './src/tests',
      '@': './src',
    },
  },
]);

module.exports = {
  presets,
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins,
};
