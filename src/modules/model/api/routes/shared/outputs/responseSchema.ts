import { z } from "zod";

const baseErrorSchema = z.object({
  message: z.string(),
});

export const errorResponseBodySchema = z.object({
  error: baseErrorSchema,
});

const zodIssueSchema = z.object({
  message: z.string(),
  path: z.array(z.string()),
  code: z.string(),
  expected: z.string(),
  received: z.string(),
});

export const errorZodResponseBodySchema = z.object({
  error: baseErrorSchema.extend({
    issues: zodIssueSchema.array(),
  }),
});

export const errorResponseSchema = z.union([
  errorResponseBodySchema,
  errorZodResponseBodySchema,
]);

export type ErrorResponse = z.infer<typeof errorResponseBodySchema>;
