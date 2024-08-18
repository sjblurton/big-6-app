import { z } from "zod"
import { WORKOUT_ID_LIST } from "../../shared/workoutIds"

export const workoutIdsSchema = z.enum(WORKOUT_ID_LIST)

export const emailSchema = z.string().email()

export type WorkoutIds = z.infer<typeof workoutIdsSchema>
