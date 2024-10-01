import { z } from "zod"

import { workoutTypeIdsUnion } from "@/modules/model/workout/workout-schemas"

const imageSchema = z.object({
    _type: z.literal("image"),
    asset: z.object({
        _ref: z.string(),
        _type: z.string(),
    }),
})

const progressionSchema = z.object({
    _key: z.string(),
    _type: z.literal("progression"),
    isSeconds: z.boolean(),
    reps: z.number(),
    sets: z.number(),
    stage: z.union([
        z.literal("Beginner"),
        z.literal("Intermediate"),
        z.literal("Advanced"),
    ]),
})

const progressionTupleSchema = z.tuple([
    progressionSchema,
    progressionSchema,
    progressionSchema,
])

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

export type ExerciseStep = z.infer<typeof stepSchema>

export const exerciseDocumentSchema = z.object({
    _createdAt: z.string(),
    _id: workoutTypeIdsUnion,
    _rev: z.string(),
    _type: z.literal("exercise-document"),
    _updatedAt: z.string(),
    image: imageSchema,
    description: z.string(),
    name: z.string(),
    steps: z.array(stepSchema),
})

export const cmsExerciseSchema = exerciseDocumentSchema.array()

export const cmsExerciseIdsSchema = z.array(
    z.object({ _id: workoutTypeIdsUnion, name: z.string() })
)

export const exerciseStepDataSchema = z.object({
    name: z.string(),
    image: imageSchema,
    step: stepSchema,
})
