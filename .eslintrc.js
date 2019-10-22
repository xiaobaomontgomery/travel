module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eqeqeq': 'off',
    'handle-callback-err': 'off',
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always'
    }],
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/require-v-for-key': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1
    }]
  },
  overrides: [
    {
      'files': ['*.vue'],
      'rules': {
        'indent': 'off'
      }
    }
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
};
