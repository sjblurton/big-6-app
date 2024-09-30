import type { PathItemObject } from "openapi3-ts/oas31"
import {
    commonOpenApiErrorResponses,
    errorResponseOpenApiSchema,
} from "../shared/open-api-error-response"
import { workoutOpenApiSchema } from "./outputs/response-schema"
import {
    openApiWorkoutIdsSchema,
    workoutIds,
} from "./outputs/workout-data-schemas"

const workoutPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get all workouts for the Id",
        description: "Get all workouts for a specific Id",
        parameters: [
            {
                name: "id",
                in: "path",
                description: `The Id of workouts to get. Available Ids are: ${Object.values(workoutIds).join(", ")}`,
                required: true,
                schema: openApiWorkoutIdsSchema,
            },
            {
                name: "limitBy",
                in: "query",
                description: "The numbers of items to return",
                schema: {
                    type: "integer",
                },
            },
        ],
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: workoutOpenApiSchema,
                    },
                },
            },
            ...commonOpenApiErrorResponses,
            400: {
                description: "Bad request",
                content: {
                    "application/json": {
                        schema: errorResponseOpenApiSchema,
                    },
                },
            },
        },
    },
}

export default workoutPath
