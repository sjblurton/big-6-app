import type {PathItemObject} from "openapi3-ts/oas31";
import {workoutOpenApiSchema} from "../openapiSchema";

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
            schema: workoutOpenApiSchema,
          },
        },
      },
      403: {
        description: "Forbidden",
        content: {
          "application/text": {
            schema: {
              type: "string",
              example: "Forbidden",
            },
          },
        },
      },
      404: {
        description: "Not Found",
        content: {
          "application/text": {
            schema: {
              type: "string",
              example: "Not Found",
            },
          },
        },
      },
    },
  },
};

export default workoutsPath;
