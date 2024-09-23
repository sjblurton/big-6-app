import { extendApi, generateSchema } from "@anatine/zod-openapi"
import bridges from "../../instructions-id/data/bridges"
import { workoutInstructionsSchema } from "./workout-instructions-schema"

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
