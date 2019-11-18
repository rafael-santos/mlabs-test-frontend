module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    camelcase: 2,
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    eqeqeq: 2,
    indent: [2, 2, { VariableDeclarator: 2 }],
    'no-eq-null': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 0,
    'no-nested-ternary': 2,
    'no-param-reassign': 2,
    'no-self-compare': 2,
    'no-shadow': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-void': 2,
    quotes: [2, 'single'],
    semi: [2, 'always']
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
