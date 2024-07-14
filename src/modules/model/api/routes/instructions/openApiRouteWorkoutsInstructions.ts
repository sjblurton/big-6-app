import type { PathItemObject } from "openapi3-ts/oas31";
import { WORKOUT_ID_LIST } from "@/modules/database/config/db";
import { commonOpenApiErrorResponses } from "../shared/openApiErrorResponse";
import { workoutsInstructionsOpenApiSchema } from "./outputs/responseSchemas";

const workoutsInstructionsPath: PathItemObject = {
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
};

export default workoutsInstructionsPath;
