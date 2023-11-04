module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error']
      },

    ],
    'import/prefer-default-export': 0,
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-dangle': 0,
    'func-names': 0,
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'max-len': 'off',
    'linebreak-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': ['error', {
      explicitSpread: 'ignore',
      exceptions: ['input', 'select', 'textarea']
    }],
    'no-bitwise': [
      'error',
      {
        allow: ['~']
      }
    ],
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'import/no-named-as-default': 0
  },
};
