module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // if typing, use typescript
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "func-names": "off",
    "jsx-a11y/anchor-is-valid": "off" // next.js stuff
  },
};
