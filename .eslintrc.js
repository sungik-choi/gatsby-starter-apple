module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["jsx-a11y", "@typescript-eslint", "react"],
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  // NOTE: cf. https://stackoverflow.com/questions/63118405/how-to-fix-eslintrc-the-file-does-not-match-your-project-config
  ignorePatterns: [
    ".eslintrc.js",
    "**/build/*",
    "src/types/GraphQL.ts",
    "*.js",
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unsafe-assignment": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
    "react/prop-types": 0,
  },
}
