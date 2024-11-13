// eslint-disable-next-line @typescript-eslint/no-require-imports, unicorn/prefer-module -- jest config
const nextJest = require("next/jest")

const createJestConfig = nextJest({
    dir: "./",
})
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverage: true,
    coverageReporters: ["json-summary", "text"],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/lib/*.*",
        "<rootDir>/src/components/lib/*.*",
        "<rootDir>/src/constants/*.*",
    ],
    coverageDirectory: "./src/features/documentation/test-coverage",
    coverageThreshold: {
        global: {
            branches: 85,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
}

// eslint-disable-next-line unicorn/prefer-module -- jest config
module.exports = createJestConfig(customJestConfig)
