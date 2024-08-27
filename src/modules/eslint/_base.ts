import { ESLINT_CONSTANTS } from "./constants"

/**
 * This is the base for both our browser and Node ESLint config files.
 */
export const eslintBase = {
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "prettier",
        require.resolve("./rules/best-practice"),
        require.resolve("./rules/comments"),
        require.resolve("./rules/es6"),
        require.resolve("./rules/import"),
        require.resolve("./rules/possible-errors"),
        require.resolve("./rules/stylistic"),
        require.resolve("./rules/unicorn"),
        require.resolve("./rules/variables"),
    ],
    env: {
        [`es${ESLINT_CONSTANTS.ECMA_VERSION}`]: true,
    },
    // Report unused `eslint-disable` comments.
    reportUnusedDisableDirectives: true,
    // Tell ESLint not to ignore dot-files, which are ignored by default.
    ignorePatterns: ["!.*.js"],
    // Global settings used by all overrides.
    settings: {
        // Use the Node resolver by default.
        "import/resolver": { node: {} },
    },
    // Global parser options.
    parserOptions: {
        ecmaVersion: ESLINT_CONSTANTS.ECMA_VERSION,
        sourceType: "module",
    },
    overrides: [
        {
            files: ESLINT_CONSTANTS.JAVASCRIPT_FILES,
            parser: "@babel/eslint-parser",
            parserOptions: {
                requireConfigFile: false,
            },
        },
    ],
}
