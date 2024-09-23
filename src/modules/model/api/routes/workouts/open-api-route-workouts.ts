import type { PathItemObject } from "openapi3-ts/oas31"
import { commonOpenApiErrorResponses } from "../shared/open-api-error-response"
import { workoutsOpenApiSchema } from "./outputs/response-schema"

const workoutsPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get all workouts",
        description: "Get all workouts for the user",
        parameters: [
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
                        schema: workoutsOpenApiSchema,
                    },
                },
            },
            ...commonOpenApiErrorResponses,
        },
    },
}

export default workoutsPath
