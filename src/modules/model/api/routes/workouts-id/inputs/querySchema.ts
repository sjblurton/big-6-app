import { generateSchema } from "@anatine/zod-openapi";
import { z } from "zod";

export const limitBySchema = z.number().int().min(1).optional().default(12);

export const requestOpenApiResponseSchema = generateSchema(limitBySchema);
