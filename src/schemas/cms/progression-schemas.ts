import { z } from "zod"

import { PROGRESSION_STAGES } from "@/constants/strings/progression-stages"

export const progressionSchema = z.object({
    _key: z.string(),
    _type: z.literal("progression"),
    isSeconds: z.boolean(),
    reps: z.number(),
    sets: z.number(),
    stage: z.enum([
        PROGRESSION_STAGES.beginner.value,
        PROGRESSION_STAGES.intermediate.value,
        PROGRESSION_STAGES.advanced.value,
    ]),
})

export const progressionTupleSchema = z.tuple([
    progressionSchema,
    progressionSchema,
    progressionSchema,
])
