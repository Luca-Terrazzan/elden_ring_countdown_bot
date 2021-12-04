/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'ignorePatterns': ['dist/**'],
  'rules': {
    'valid-jsdoc': 'off',
    'object-curly-spacing': ['error', 'always'],
  },
};