module.exports = {
  root: true,
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  // NOTE: cf. https://stackoverflow.com/questions/63118405/how-to-fix-eslintrc-the-file-does-not-match-your-project-config
  ignorePatterns: [".eslintrc.js", "**/build/*", "*.js"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      processor: "@graphql-eslint/graphql",
      parser: "@typescript-eslint/parser",
      plugins: [
        "import",
        "react",
        "react-hooks",
        "jsx-a11y",
        "@typescript-eslint",
      ],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      env: {
        es6: true,
      },
      rules: {
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],
        "import/no-duplicates": ["error", { "prefer-inline": true }],
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { fixStyle: "inline-type-imports" },
        ],
        "@typescript-eslint/consistent-type-exports": "error",
        "sort-imports": [
          "error",
          {
            ignoreDeclarationSort: true,
          },
        ],
        "import/order": [
          "error",
          {
            "newlines-between": "always",
            alphabetize: { order: "asc" },
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            pathGroupsExcludedImportTypes: ["react", "react-dom"],
            pathGroups: [
              {
                pattern: "react",
                group: "external",
                position: "before",
              },
              {
                pattern: "react-dom",
                group: "external",
                position: "before",
              },
              {
                pattern: "~/**/*",
                group: "internal",
                position: "before",
              },
            ],
          },
        ],
        "max-classes-per-file": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-array-index-key": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/no-unsafe-assignment": 0,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/restrict-template-expressions": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
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
