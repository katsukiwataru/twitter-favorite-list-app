module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'no-console': 'error',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'no-dupe-class-members': 'off',
    'no-undef': 'off',
    'prettier/prettier': ['error', require('./.prettierrc.json'), { usePrettierrc: false }],
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
  },
  globals: {
    process: true,
    module: true,
    app: true,
  },
  env: {
    jest: true,
    es6: true,
    browser: true,
    node: true,
  },
};
