import { extendApi, generateSchema } from "@anatine/zod-openapi"

import { workoutInstructionsSchema } from "./workoutInstructionsSchema"
import bridges from "../data/bridges"

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
