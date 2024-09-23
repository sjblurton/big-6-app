import { extendApi, generateSchema } from "@anatine/zod-openapi"
import bridges from "../data/bridges"
import { workoutInstructionsSchema } from "./workout-instructions-schema"

export const workoutsInstructionsBody200ResponseSchema = extendApi(
    workoutInstructionsSchema,
    {
        description: "Instructions for a workout",
        example: {
            title: "Bridges",
            description: "Bridges are a great workout for your back.",
            levelNames: [bridges.map((bridge) => bridge.name)],
        },
    }
)

export const workoutsInstructionsOpenApiSchema = generateSchema(
    workoutsInstructionsBody200ResponseSchema
)
