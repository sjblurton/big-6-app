import type { PathItemObject } from "openapi3-ts/oas31";
import { workoutsOpenApiSchema } from "./responsechema";
import {
  error403ResponseOpenApiSchema,
  error404ResponseOpenApiSchema,
  error500ResponseOpenApiSchema,
} from "../errorRespones";

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
      403: {
        description: "Forbidden",
        content: {
          "application/json": {
            schema: error403ResponseOpenApiSchema,
          },
        },
      },
      404: {
        description: "Not Found",
        content: {
          "application/json": {
            schema: error404ResponseOpenApiSchema,
          },
        },
      },
      500: {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: error500ResponseOpenApiSchema,
          },
        },
      },
    },
  },
};

export default workoutsPath;
