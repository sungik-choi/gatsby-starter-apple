module.exports = {
  root: true,
  // NOTE: cf. https://stackoverflow.com/questions/63118405/how-to-fix-eslintrc-the-file-does-not-match-your-project-config
  ignorePatterns: [".eslintrc.js", "**/build/*", "*.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      processor: "@graphql-eslint/graphql",
      parser: "@typescript-eslint/parser",
      plugins: ["react", "react-hooks", "jsx-a11y", "@typescript-eslint"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      env: {
        es6: true,
      },
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
        "react/prop-types": 0,
      },
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/no-anonymous-operations": "error",
        "@graphql-eslint/naming-convention": [
          "error",
          {
            OperationDefinition: {
              style: "PascalCase",
              forbiddenPrefixes: ["Query", "Mutation", "Subscription", "Get"],
              forbiddenSuffixes: ["Query", "Mutation", "Subscription"],
            },
          },
        ],
      },
    },
  ],
}
