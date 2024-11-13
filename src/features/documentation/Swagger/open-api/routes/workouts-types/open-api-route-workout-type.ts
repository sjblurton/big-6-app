import {
    commonOpenApiErrorResponses,
    errorResponseOpenApiSchema,
} from "../../common/open-api-error-response"
import { workoutTypesOpenApiSchema } from "../../common/response-schema"

import type { PathItemObject } from "openapi3-ts/oas31"

const workoutTypesPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get all most workout types (names and Ids)",
        description: "",
        responses: {
            200: {
                description: "Successful response",
                content: {
                    "application/json": {
                        schema: workoutTypesOpenApiSchema,
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

export default workoutTypesPath
