import { extendApi, generateSchema } from "@anatine/zod-openapi"
import { workoutsSchema } from "./workouts-data-schemas"

export const workoutsBody200ResponseSchema = extendApi(workoutsSchema)

export const workoutsOpenApiSchema = generateSchema(
    workoutsBody200ResponseSchema
)
