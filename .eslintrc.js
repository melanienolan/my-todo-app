module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      modules: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': 1,
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/prop-types': 'error',
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2
  }
};
