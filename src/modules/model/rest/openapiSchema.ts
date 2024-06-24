import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";
import workoutSchema from "../workouts/workoutSchemas";

export const workoutOpenApiSchema = generateSchema(workoutSchema.array());

export const badRequestBodySchema = z
  .object({
    message: z.string().openapi({
      title: "Message",
      example: "Bad Request",
    }),
    hint: z
      .string()
      .openapi({
        title: "Hint",
        example: "Check the request and try again",
      })
      .optional(),
  })
  .array();

export const badRequestOpenApiResponseSchema =
  generateSchema(badRequestBodySchema);

export const limitBySchema = z
  .number()
  .int()
  .min(1)
  .openapi({
    title: "Limit",
    description: "The number of documents to return | Default: 12",
    example: 12,
  })
  .optional()
  .default(12);

export const requestOpenApiResponseSchema = generateSchema(limitBySchema);
