module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    'jest/globals': true,
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'react-hooks'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json'
      },
      rules: {
        quotes: ['error', 'single'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
      }
    }
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'func-call-spacing': ['error', 'never'],
    'no-multi-spaces': 'error',
    'comma-spacing': [1, { before: false, after: true }],
    'space-before-blocks': 'error',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', { code: 120 }],
    'react/prop-types': [2],
    'react/display-name': ['off'],
    'react/no-unescaped-entities': ['off'],
    //indent: ["error", 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['clear', 'info', 'error', 'dir', 'trace'] }],
    curly: 'error',
    'no-else-return': 'error',
    'no-unneeded-ternary': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    strict: 'error',
    'arrow-parens': ['error', 'as-needed'],
    'space-in-parens': ['error', 'never'],
    'symbol-description': 'error',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
    yoda: ['error', 'never', { exceptRange: true }]
  }
};
