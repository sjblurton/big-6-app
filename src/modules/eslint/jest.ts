import { ESLINT_CONSTANTS } from "./constants"

module.exports = {
    extends: ["plugin:jest/recommended", require.resolve("./rules/jest")],
    overrides: [
        // Prefer the Jest version of this rule. This silently fails when type
        // information is not available.
        {
            files: ESLINT_CONSTANTS.TYPESCRIPT_FILES,
            rules: {
                "@typescript-eslint/unbound-method": "off",
                "jest/unbound-method": "error",
            },
        },
    ],
}
