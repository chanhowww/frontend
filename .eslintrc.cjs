module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "espree",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  plugins: ["vue", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "plugin:prettier/recommended", // ESLint 7 호환
  ],
  rules: {
    // 자동 fix 가능한 JS 규칙
    semi: ["error", "always"],
    quotes: ["error", "double"],
    indent: ["error", 2],
    "no-trailing-spaces": "error",
    "no-multiple-empty-lines": ["error", { max: 1 }],

    // 수동 변경 필요
    "no-var": "error",
    "prefer-const": "warn",
    "vue/no-multiple-template-root": "off",

    // Prettier 규칙
    "prettier/prettier": [
      "error",
      {
        semi: true,
        singleQuote: false,
        trailingComma: "es5",
        printWidth: 100,
        tabWidth: 2,
      },
    ],
  },
};
