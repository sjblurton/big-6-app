import { generateSchema } from "@anatine/zod-openapi"

import { limitBySchema } from "@/server/schemas/query-schema"

export const requestOpenApiResponseSchema = generateSchema(limitBySchema)
