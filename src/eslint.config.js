module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
