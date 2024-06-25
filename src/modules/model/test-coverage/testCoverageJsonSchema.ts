import { z } from "zod";

const coverageMetricsSchema = z.object({
  total: z.number(),
  covered: z.number(),
  skipped: z.number(),
  pct: z.number(),
});

const fileCoverageSchema = z.object({
  lines: coverageMetricsSchema,
  statements: coverageMetricsSchema,
  functions: coverageMetricsSchema,
  branches: coverageMetricsSchema,
});

const totalCoverageSchema = z.object({
  lines: coverageMetricsSchema,
  statements: coverageMetricsSchema,
  functions: coverageMetricsSchema,
  branches: coverageMetricsSchema,
  branchesTrue: coverageMetricsSchema,
});

const dynamicFilesSchema = z.record(z.string(), fileCoverageSchema);

export const testCoverageSchema = z.union([
  totalCoverageSchema,
  dynamicFilesSchema,
]);
