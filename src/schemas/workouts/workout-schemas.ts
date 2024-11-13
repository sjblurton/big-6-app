import { z } from "zod"

import { workoutTypeIdsUnion } from "./workout-type-ids-schema"

export const repsSchema = z.object({ value: z.number().min(1).max(200).int() })

export const workoutSchema = z.object({
    id: z.string(),
    date: z.number(),
    reps: repsSchema.array().max(100).min(1),
    level: z.number().min(1).max(10).int(),
    type: workoutTypeIdsUnion,
    comments: z.string().optional(),
    user: z.string().email(),
})
