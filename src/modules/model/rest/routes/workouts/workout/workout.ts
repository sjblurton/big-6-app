import type { PathItemObject } from "openapi3-ts/oas31";
import { WORKOUT_COLLECTIONS } from "@/modules/database/config/db";
import { workoutOpenApiSchema } from "./responseSchema";
import { commonOpenApiErrorResponses } from "../../../errorResponse";
import { error400ResponseOpenApiSchema } from "./errorRosponse";

const workoutPath: PathItemObject = {
  get: {
    tags: ["workouts"],
    summary: "Get all workouts for a collection",
    description: "Get all workouts for a specific collection",
    parameters: [
      {
        name: "workoutCollection",
        in: "path",
        description: `The collection of workouts to get. Available collections are: ${WORKOUT_COLLECTIONS.join(", ")}`,
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
            schema: workoutOpenApiSchema(WORKOUT_COLLECTIONS[0]),
          },
        },
      },
      ...commonOpenApiErrorResponses,
      400: {
        description: "Bad request",
        content: {
          "application/json": {
            schema: error400ResponseOpenApiSchema,
          },
        },
      },
    },
  },
};

export default workoutPath;
