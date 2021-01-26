module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    // general javascript/typescript
    'array-bracket-spacing': [ 'warn', 'always' ],
    'no-nested-ternary': 'error',
    'object-curly-spacing': [ 'warn', 'always' ],
    'object-property-newline': [ 'warn', { allowAllPropertiesOnSameLine: true } ],
    'prefer-const': 'error',

    // react rules
    'react/jsx-closing-bracket-location': [ 'warn', 'tag-aligned' ],
    'react/jsx-curly-brace-presence': [ 'warn', {
      props: 'never',
      children: 'never'
    } ],
    'react/jsx-wrap-multilines': [ 'warn', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    } ],
    'react/jsx-no-useless-fragment': 'warn',

    // typescript-specific
    '@typescript-eslint/brace-style': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/indent': [ 'warn', 2, {
      SwitchCase: 1,
    } ],
    '@typescript-eslint/member-delimiter-style': [ 'error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': false
      }
    } ],
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [ 'warn', 'single', { avoidEscape: true } ],
    '@typescript-eslint/semi': [ 'error', 'always' ],
    '@typescript-eslint/type-annotation-spacing': 'error',
  }
};