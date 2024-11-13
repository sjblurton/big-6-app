import { z } from "zod"

import { WORKOUT_DETAILS } from "@/constants/strings/workout-details"
import {
    documentBaseSchema,
    imageSchema,
    imageWithBlurSchema,
} from "@/libs/cms/schemas/base-schemas"
import { workoutTypeIdsUnion } from "@/schemas/workouts/workout-type-ids-schema"

import { stepSchema } from "./step-schemas"

export const exerciseDocumentSchema = documentBaseSchema.extend({
    _id: workoutTypeIdsUnion,
    _type: z.literal("exercise-document"),
    image: imageSchema,
    description: z.string(),
    name: z.enum([
        WORKOUT_DETAILS.bridge.value,
        WORKOUT_DETAILS.handstand.value,
        WORKOUT_DETAILS.legRaise.value,
        WORKOUT_DETAILS.pullUp.value,
        WORKOUT_DETAILS.pushUp.value,
        WORKOUT_DETAILS.squat.value,
    ]),
    steps: z.array(stepSchema),
})

export const cmsExerciseSchema = exerciseDocumentSchema.array()

export const cmsExerciseIdSchema = exerciseDocumentSchema
    .pick({ _id: true, name: true })
    .extend({
        image: imageWithBlurSchema,
    })

export const cmsExerciseIdsSchema = cmsExerciseIdSchema.array()
