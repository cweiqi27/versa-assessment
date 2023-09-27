module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  root: true,
  ignorePatterns: [".eslintrc.cjs", "jest.config.cjs"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
  },
};
