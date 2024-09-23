import { v4 as uuidv4 } from "uuid"
import {
    type TestCoverageData,
    testCoverageJsonSchema,
    type TestCoverageSummary,
    testCoverageSummarySchema,
} from "@/modules/model/test-coverage/test-coverage-json-schema"
import coverage from "./coverage-summary.json"
import { tableColumnNames } from "./constants"

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

    tableColumnNames.forEach((column) => {
        result[column] = Math.round(data[column].pct)
    })

    return result
}

function parseName(name: string): string {
    const lastIndex = name.lastIndexOf("/")
    const result = name.substring(lastIndex + 1)
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
