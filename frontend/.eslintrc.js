module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts'
    ]
  },
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'react/display-name': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'semi': ['error', 'always'],
    'react/prop-types': 'off'
  }
};
