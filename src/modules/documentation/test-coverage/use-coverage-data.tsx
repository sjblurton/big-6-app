import { v4 as uuidv4 } from "uuid"

import {
    type TestCoverageData,
    testCoverageJsonSchema,
    type TestCoverageSummary,
    testCoverageSummarySchema,
} from "@/modules/documentation/test-coverage/test-coverage-json-schema"

import { tableColumnNames } from "./constants"
import coverage from "./coverage-summary.json"

const coverageData = testCoverageJsonSchema.parse(coverage)

function createData(name: string, data: TestCoverageData): TestCoverageSummary {
    const result: TestCoverageSummary = {
        name,
        key: uuidv4(),
        lines: 0,
        statements: 0,
        functions: 0,
        branches: 0,
    }

    for (const column of tableColumnNames) {
        result[column] = Math.round(data[column].pct)
    }

    return result
}

function parseName(name: string): string {
    const lastIndex = name.lastIndexOf("/")
    const result = name.slice(Math.max(0, lastIndex + 1))
    return result
}

const summarizedCoverageData =
    Object.entries(coverageData).map(([name, data]) =>
        createData(parseName(name), data)
    ) ?? []

function useCoverageData() {
    return testCoverageSummarySchema.array().parse(summarizedCoverageData)
}

export default useCoverageData
