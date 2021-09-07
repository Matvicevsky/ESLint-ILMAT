const base = require('./lib/base')
const react = require('./lib/react')
const prettier = require('./lib/prettier')

module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended', 'plugin:@typescript-eslint'],
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        ...base,
        ...react,
        ...prettier
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}