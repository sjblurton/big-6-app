/**
 * These are enabled by `jsx-a11y/recommended`, but we've made the decision to
 * disable them.
 */
const disabledA11yRules = {
    // This rule has been deprecated, but not yet removed.
    "jsx-a11y/no-onchange": "off",
}

export const a11yRules = {
    rules: {
        ...disabledA11yRules,
    },
}
