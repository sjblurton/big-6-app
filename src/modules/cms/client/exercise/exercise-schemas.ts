import { z } from "zod"

import { exerciseNames } from "@/modules/contants/exercise-names"
import { progressionStages } from "@/modules/contants/progression-stages"
import { workoutTypeIdsUnion } from "@/modules/model/workout/workout-schemas"

import { documentBaseSchema, imageSchema } from "../shared/base-schemas"

const progressionSchema = z.object({
    _key: z.string(),
    _type: z.literal("progression"),
    isSeconds: z.boolean(),
    reps: z.number(),
    sets: z.number(),
    stage: z.enum([
        progressionStages.beginner.value,
        progressionStages.intermediate.value,
        progressionStages.advanced.value,
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

export const exerciseDocumentSchema = documentBaseSchema.extend({
    _id: workoutTypeIdsUnion,
    _type: z.literal("exercise-document"),
    image: imageSchema,
    description: z.string(),
    name: z.enum([
        exerciseNames.bridge.value,
        exerciseNames.handstand.value,
        exerciseNames.legRaise.value,
        exerciseNames.pullUp.value,
        exerciseNames.pushUp.value,
        exerciseNames.squat.value,
    ]),
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
