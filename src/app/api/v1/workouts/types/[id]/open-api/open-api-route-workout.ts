import {
    openApiWorkoutIdsSchema,
    workoutTypes,
} from "../../../../../../../modules/model/workout/workout-schemas"
import {
    commonOpenApiErrorResponses,
    errorResponseOpenApiSchema,
    openApi404ErrorResponse,
} from "../../../shared/open-api-error-response"
import { workoutsOpenApiSchema } from "../../../shared/outputs/response-schema"

import type { PathItemObject } from "openapi3-ts/oas31"

const workoutTypeIdPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get all most recent workouts for the type",
        description:
            "Returns the most recent data for the workout type with the given Id",
        parameters: [
            {
                name: "id",
                in: "path",
                description: `The Id of workouts to get. Available Ids are: ${Object.values(
                    workoutTypes
                )
                    .map(({ id }) => id)
                    .join(", ")}`,
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
            {
                name: "start",
                in: "query",
                description: "The start position of the items to return",
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
                        schema: workoutsOpenApiSchema,
                    },
                },
            },
            ...commonOpenApiErrorResponses,
            ...openApi404ErrorResponse,
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

export default workoutTypeIdPath
