import { z } from "zod"

const coverageMetricsSchema = z.object({
    total: z.number(),
    covered: z.number(),
    skipped: z.number(),
    pct: z.number(),
})

const fileCoverageSchema = z.object({
    lines: coverageMetricsSchema,
    statements: coverageMetricsSchema,
    functions: coverageMetricsSchema,
    branches: coverageMetricsSchema,
})

export const testCoverageSummarySchema = z.object({
    key: z.string().uuid(),
    name: z.string(),
    lines: z.number(),
    statements: z.number(),
    functions: z.number(),
    branches: z.number(),
})

export const testCoverageJsonSchema = z.record(z.string(), fileCoverageSchema)

export type TestCoverageData = z.infer<typeof fileCoverageSchema>

export type TestCoverageSummary = z.infer<typeof testCoverageSummarySchema>
