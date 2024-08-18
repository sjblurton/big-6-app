// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest")

const createJestConfig = nextJest({
    dir: "./",
})
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverage: true,
    coverageReporters: ["json-summary", "text"],
    coverageDirectory: "./src/modules/documentation/test-coverage",
    coverageThreshold: {
        global: {
            branches: 69,
            functions: 89,
            lines: 90,
            statements: 90,
        },
    },
}
module.exports = createJestConfig(customJestConfig)
