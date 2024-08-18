import { extendApi, generateSchema } from "@anatine/zod-openapi"

import { workoutInstructionsSchema } from "./workoutInstructionsSchema"
import bridges from "../../instructions-id/data/bridges"

export const workoutsInstructionsBody200ResponseSchema = extendApi(
    workoutInstructionsSchema,
    {
        description: "Instructions for a workout",
        example: bridges.filter(({ level }) => level === 6)[0],
    }
)

export const workoutsInstructionsOpenApiSchema = generateSchema(
    workoutsInstructionsBody200ResponseSchema
)
