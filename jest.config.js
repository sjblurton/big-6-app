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
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    testEnvironment: "jest-environment-jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    collectCoverage: true,
    coverageReporters: ["json-summary", "text"],
    coveragePathIgnorePatterns: [
        "<rootDir>/src/modules/components/library/mui/*.*",
    ],
    coverageDirectory: "./src/modules/documentation/test-coverage",
    coverageThreshold: {
        global: {
            branches: 69,
            functions: 89,
            lines: 90,
            statements: 90,
        },
        "ts-jest": {
            useESM: true,
        },
    },
}

// eslint-disable-next-line unicorn/prefer-module -- jest config
module.exports = createJestConfig(customJestConfig)
