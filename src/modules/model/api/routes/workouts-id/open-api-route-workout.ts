import type { PathItemObject } from "openapi3-ts/oas31"
import {
    commonOpenApiErrorResponses,
    errorResponseOpenApiSchema,
} from "../shared/open-api-error-response"
import { workoutOpenApiSchema } from "../shared/outputs/response-schema"

const workoutIdPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get the workout document for the id",
        description: "",
        parameters: [
            {
                name: "id",
                in: "path",
                description: "The document id",
                required: true,
                schema: {
                    type: "string",
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

export default workoutIdPath
