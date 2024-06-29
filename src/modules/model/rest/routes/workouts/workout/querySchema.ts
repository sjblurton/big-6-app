import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

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
