import { z } from "zod"

import { imageSchema } from "@/libs/cms/schemas/base-schemas"

import { progressionTupleSchema } from "./progression-schemas"

export const stepSchema = z.object({
    _key: z.string(),
    _type: z.literal("step"),
    name: z.string(),
    negative: z.string(),
    negativeImage: imageSchema,
    positive: z.string(),
    positiveImage: imageSchema,
    progressions: progressionTupleSchema,
    step: z.number().min(1).max(10),
    video: z.string(),
})
