import { z } from "zod"

import { imageSchema } from "@/libs/cms/schemas/base-schemas"
import { workoutSchema } from "@/schemas/workouts/workout-schemas"

import { stepSchema } from "../cms"

export const updateWorkoutSchema = z
    .object({
        workout: workoutSchema
            .omit({ level: true, id: true })
            .extend({
                level: z.string().regex(/^[1-9]|10$/),
            })
            .partial(),
        metadata: z.object({
            name: z.string(),
            image: imageSchema,
            step: stepSchema,
        }),
    })
    .transform((data) => {
        const { workout } = data
        const { level } = workout || {}

        return workoutSchema.partial().parse({
            ...workout,
            level: level ? Number.parseInt(level, 10) : undefined,
        })
    })
