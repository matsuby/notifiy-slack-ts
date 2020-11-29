module.exports = {
  extends: ['eslint:recommended'],
  plugins: ['jest', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    project: './tsconfig.eslint.json',
  },
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { ignoreRestSiblings: true },
        ],
      },
    },
  ],
}
