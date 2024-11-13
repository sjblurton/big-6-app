import { z } from "zod"

import { WORKOUT_DETAILS } from "@/constants/strings/workout-details"
import { imageWithBlurSchema } from "@/libs/cms/schemas/base-schemas"
import { workoutSchema } from "@/schemas/workouts/workout-schemas"
import { workoutTypeIdsUnion } from "@/schemas/workouts/workout-type-ids-schema"

export const createWorkoutSchema = z
    .object({
        workout: workoutSchema.omit({ id: true, level: true }).extend({
            level: z.string().regex(/^[1-9]|10$/),
        }),
        metadata: z.object({
            step: z.object({
                current: z.number().int(),
                total: z.number().int(),
            }),
            workoutIds: z
                .object({
                    _id: workoutTypeIdsUnion,
                    name: z.enum([
                        WORKOUT_DETAILS.bridge.value,
                        WORKOUT_DETAILS.handstand.value,
                        WORKOUT_DETAILS.legRaise.value,
                        WORKOUT_DETAILS.pullUp.value,
                        WORKOUT_DETAILS.pushUp.value,
                        WORKOUT_DETAILS.squat.value,
                    ]),
                    image: imageWithBlurSchema,
                })
                .array(),
        }),
    })
    .transform(({ workout }) =>
        workoutSchema.omit({ id: true }).parse({
            ...workout,
            level: Number.parseInt(workout.level, 10),
        })
    )
