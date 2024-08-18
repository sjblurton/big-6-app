import { extendApi, generateSchema } from "@anatine/zod-openapi"
import { workoutSchema } from "./workoutDataSchemas"

export const workoutBody200ResponseSchema = extendApi(workoutSchema.array())

export const workoutOpenApiSchema = generateSchema(workoutBody200ResponseSchema)
