module.exports = {
  root: true,
  env: {
    browser: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'dot-location': ['error', 'property'],
    'no-restricted-syntax': ['error', 'MemberExpression > ObjectExpression.object'],
    'object-curly-spacing': 'off',
    semi: ['error', 'always']
  }
};
