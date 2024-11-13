import { type z } from "zod"

import {
    type cmsExerciseIdSchema,
    type exerciseStepDataSchema,
    type stepSchema,
} from "@/schemas/cms"

export type ExerciseStepData = z.infer<typeof exerciseStepDataSchema>

export type CmsExerciseIdSchema = z.infer<typeof cmsExerciseIdSchema>

export type ExerciseStep = z.infer<typeof stepSchema>
