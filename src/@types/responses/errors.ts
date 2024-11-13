import { type z } from "zod"

import { type errorResponseBodySchema } from "@/schemas/responses"

export type ErrorResponse = z.infer<typeof errorResponseBodySchema>
