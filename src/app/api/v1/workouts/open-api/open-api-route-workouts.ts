import type { PathItemObject } from "openapi3-ts/oas31"
import { commonOpenApiErrorResponses } from "../shared/open-api-error-response"
import { workoutsOpenApiSchema } from "../shared/outputs/response-schema"

const workoutsPath: PathItemObject = {
    get: {
        tags: ["workouts"],
        summary: "Get the most recent data for each workout",
        description:
            "One workout per workout ID is returned, with the most recent data for each workout",
        parameters: [
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
        },
    },
}

export default workoutsPath
