import { generateSchema } from "@anatine/zod-openapi"

import { workoutTypeIdsUnion } from "@/schemas/workouts/workout-type-ids-schema"

export const openApiWorkoutIdsSchema = generateSchema(workoutTypeIdsUnion)
