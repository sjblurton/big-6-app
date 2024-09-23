import { extendApi, generateSchema } from "@anatine/zod-openapi"
import { workoutSchema } from "./workout-data-schemas"

export const workoutBody200ResponseSchema = extendApi(workoutSchema.array())

export const workoutOpenApiSchema = generateSchema(workoutBody200ResponseSchema)
