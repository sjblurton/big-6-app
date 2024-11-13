import { extendApi, generateSchema } from "@anatine/zod-openapi"

import { cmsExerciseIdsSchema } from "@/schemas/cms"
import { workoutSchema } from "@/schemas/workouts/workout-schemas"

const workoutsBody200ResponseSchema = extendApi(workoutSchema.array())

export const workoutsOpenApiSchema = generateSchema(
    workoutsBody200ResponseSchema
)

const workoutBody200ResponseSchema = extendApi(workoutSchema)

export const workoutOpenApiSchema = generateSchema(workoutBody200ResponseSchema)

const workoutTypesBody200ResponseSchema = extendApi(cmsExerciseIdsSchema)

export const workoutTypesOpenApiSchema = generateSchema(
    workoutTypesBody200ResponseSchema
)
