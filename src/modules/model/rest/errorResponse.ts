import { extendZodWithOpenApi, generateSchema } from "@anatine/zod-openapi";
import { ResponsesObject } from "openapi3-ts/oas31";
import { z } from "zod";

extendZodWithOpenApi(z);

const baseErrorSchema = z.object({
  message: z.string(),
});

export const errorResponseBodySchema = z
  .object({
    error: baseErrorSchema,
  })
  .openapi({
    title: "Error Response",
    example: {
      error: {
        message: "Error message",
      },
    },
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

export const error403ResponseOpenApiSchema = generateSchema(
  errorResponseBodySchema.openapi({
    title: "Forbidden Error",
    example: {
      error: {
        message: "Forbidden",
      },
    },
  }),
);

export const error404ResponseOpenApiSchema = generateSchema(
  errorResponseBodySchema.openapi({
    title: "Not Found Error",
    example: {
      error: {
        message: "Not Found",
      },
    },
  }),
);

export const error500ResponseOpenApiSchema = generateSchema(
  errorResponseBodySchema.openapi({
    title: "Internal Server Error",
    example: {
      error: {
        message: "Internal Server Error",
      },
    },
  }),
);

export const commonOpenApiErrorResponses: ResponsesObject = {
  403: {
    description: "Forbidden",
    content: {
      "application/json": {
        schema: error403ResponseOpenApiSchema,
      },
    },
  },
  404: {
    description: "Not Found",
    content: {
      "application/json": {
        schema: error404ResponseOpenApiSchema,
      },
    },
  },
  500: {
    description: "Internal Server Error",
    content: {
      "application/json": {
        schema: error500ResponseOpenApiSchema,
      },
    },
  },
};
