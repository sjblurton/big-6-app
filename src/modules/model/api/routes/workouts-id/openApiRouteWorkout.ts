import type { PathItemObject } from "openapi3-ts/oas31"

import { workoutOpenApiSchema } from "./outputs/responseSchema"
import {
    commonOpenApiErrorResponses,
    errorResponseOpenApiSchema,
} from "../shared/openApiErrorResponse"
import { WORKOUT_ID_LIST } from "../shared/workoutIds"

const workoutPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get all workouts for the Id",
        description: "Get all workouts for a specific Id",
        parameters: [
            {
                name: "id",
                in: "path",
                description: `The Id of workouts to get. Available Ids are: ${WORKOUT_ID_LIST.join(", ")}`,
                required: true,
                schema: {
                    type: "string",
                },
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
