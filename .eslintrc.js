module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2018
  },
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "off"
  }
};
