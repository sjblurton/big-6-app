import type { PathItemObject } from "openapi3-ts/oas31"
import { commonOpenApiErrorResponses } from "../shared/open-api-error-response"
import { WORKOUT_ID_LIST } from "../shared/workout-ids"
import { workoutsInstructionsOpenApiSchema } from "./outputs/response-schemas"

const workoutsInstructionsPathIdLevel: PathItemObject = {
    get: {
        tags: ["instructions"],
        summary: "Get workout instructions by id",
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
                name: "level",
                in: "path",
                description: "The level of the workout 1 to 10",
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
                        schema: workoutsInstructionsOpenApiSchema,
                    },
                },
            },
            404: { ...commonOpenApiErrorResponses[404] },
            500: { ...commonOpenApiErrorResponses[500] },
        },
    },
}

export default workoutsInstructionsPathIdLevel
