import { z } from "zod"

import { documentBaseSchema, imageSchema } from "../shared/base-schemas"

const exerciseSchema = z.object({
    _key: z.string(),
    image: imageSchema,
    name: z.string(),
})

const daySchema = z.object({
    name: z.string(),
    _key: z.string(),
    exercises: exerciseSchema.array(),
})

export const routineDocumentSchema = documentBaseSchema.extend({
    rest: imageSchema,
    _type: z.literal("routine-document"),
    name: z.string(),
    days: daySchema.array(),
})
