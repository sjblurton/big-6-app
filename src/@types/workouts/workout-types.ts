import { type z } from "zod"

import { type workoutSchema } from "@/schemas/workouts/workout-schemas"
import { type workoutTypeIdsUnion } from "@/schemas/workouts/workout-type-ids-schema"

export type WorkoutTypeIds = z.infer<typeof workoutTypeIdsUnion>

export type WorkoutData = z.infer<typeof workoutSchema>
