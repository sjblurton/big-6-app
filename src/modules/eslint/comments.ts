export const commentEslint = {
    extends: [
        "plugin:eslint-comments/recommended",
        require.resolve("./rules/comments"),
    ],
}
