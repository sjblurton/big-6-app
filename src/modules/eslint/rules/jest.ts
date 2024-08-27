export const jestRules = {
    rules: {
        /**
         * Disallow duplicate setup and teardown hooks.
         *
         * 🚫 Not fixable - https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
         */
        "jest/no-duplicate-hooks": "error",
        /**
         * Require lowercase test names.
         *
         * 🔧 Fixable - https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
         */
        "jest/prefer-lowercase-title": "warn",
        /**
         * Disallow disabled tests.
         *
         * 🚫 Not fixable - https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
         */
        "jest/no-disabled-tests": "error",
        /**
         * Disallow focused tests.
         *
         * 💡 This rule is manually fixable - https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
         */
        "jest/no-focused-tests": "error",
        /**
         * Disallow identical titles.
         *
         * 🚫 Not fixable - https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
         */
        "jest/no-identical-title": "error",
        /**
         * Suggest using toHaveLength.
         *
         * 🚫 Not fixable - https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
         */
        "jest/prefer-to-have-length": "error",
        /**
         * Enforce valid expect() usage .
         *
         * 🚫 Not fixable -https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
         */
        "jest/valid-expect": "error",
    },
}
