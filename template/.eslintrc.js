module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prefer-arrow-functions'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prefer-arrow-functions/prefer-arrow-functions': [
          'error',
          {
            classPropertiesAllowed: false,
            disallowPrototype: false,
            returnStyle: 'unchanged',
            singleReturnOnly: false,
          },
        ],
      },
    },
  ],
};
