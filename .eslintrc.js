module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prefer-arrow-functions'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/named': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-unresolved': 'off',
        'no-var': 'error',
        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: 'export', next: '*' },
        ],
        'prefer-arrow-functions/prefer-arrow-functions': [
          'error',
          {
            classPropertiesAllowed: false,
            disallowPrototype: false,
            returnStyle: 'unchanged',
            singleReturnOnly: false,
          },
        ],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                name: 'styled-components',
                message: 'Please use the styled-components/native instead.',
              },
              {
                name: 'react-native',
                importNames: ['Text', 'View'],
                message:
                  'Please use the Text of react-native-paper and Styled.View instead.',
              },
            ],
            patterns: [
              {
                group: ['@theme/*', '!@theme/common'],
                message: 'Please use styled context instead.',
              },
            ],
          },
        ],
        'import/order': [
          'error',
          {
            warnOnUnassignedImports: true,
            'newlines-between': 'always-and-inside-groups',
            alphabetize: { order: 'asc', caseInsensitive: true },
            groups: [
              'builtin',
              'external',
              'internal',
              ['sibling', 'parent'],
              'index',
            ],
            pathGroups: [
              {
                pattern: 'react',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'styled-components/native',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'styled-components',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'react-native-paper',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'react-native-paper/**',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'axios',
                group: 'builtin',
                position: 'before',
              },
              { pattern: '@env', group: 'internal' },
            ],
            distinctGroup: false,
            pathGroupsExcludedImportTypes: ['react'],
          },
        ],
      },
    },
  ],
};
