import { z } from "zod"

const setsAndRepsSchema = z.object({ sets: z.number(), reps: z.number() })

const negativePositiveSchema = z.object({
    positive: z.string(),
    negative: z.string(),
})

const progressionsSchema = z.object({
    beginner: setsAndRepsSchema,
    intermediate: setsAndRepsSchema,
    advanced: setsAndRepsSchema,
})

const stepSchema = z.object({
    step: z.number().min(1).max(10).int(),
    name: z.string(),
    progressions: progressionsSchema,
    directions: negativePositiveSchema,
    video: z.string().url(),
})

export const exerciseSchema = z.object({
    key: z.string(),
    title: z.string(),
    // name: z.string(),
    description: z.string(),
    steps: stepSchema.array().length(10),
})

export type Exercise = z.infer<typeof exerciseSchema>
export type ExerciseStep = z.infer<typeof stepSchema>
