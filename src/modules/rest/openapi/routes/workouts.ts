import type { PathItemObject } from "openapi3-ts/oas31";
import {
  requestOpenApiResponseSchema,
  workoutOpenApiSchema,
} from "../../schemas/openapiSchema";

const workoutsPath: PathItemObject = {
  post: {
    tags: ["workouts"],
    summary: "Get all workouts",
    description: "Get all workouts for the user",
    requestBody: {
      content: {
        "application/json": {
          schema: requestOpenApiResponseSchema,
        },
      },
    },
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
