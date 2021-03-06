module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },

  extends: [
    'standard',
    'prettier/standard',
    'plugin:import/errors',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['import', 'prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'generator-star-spacing': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src']
      }
    }
  },
  overrides: [
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-this-alias': ['error'],
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-var-requires': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
        ]
      }
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
}
