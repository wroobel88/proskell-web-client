module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ["plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: "babel-eslint",
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
};
