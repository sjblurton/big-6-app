import { z } from "zod"
import { extendApi, generateSchema } from "@anatine/zod-openapi"
import { cmsExerciseIdsSchema } from "@/modules/sanity/lib/schemas"
import { workoutSchema } from "../schemas/workout-data-schemas"

const baseErrorSchema = z.object({
    message: z.string(),
})

export const errorResponseBodySchema = z.object({
    error: baseErrorSchema,
})

const zodIssueSchema = z.object({
    message: z.string(),
    path: z.array(z.string()),
    code: z.string(),
    expected: z.string(),
    received: z.string(),
})

export const errorZodResponseBodySchema = z.object({
    error: baseErrorSchema.extend({
        issues: zodIssueSchema.array(),
    }),
})

export const errorResponseSchema = z.union([
    errorResponseBodySchema,
    errorZodResponseBodySchema,
])

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

export type ErrorResponse = z.infer<typeof errorResponseBodySchema>
