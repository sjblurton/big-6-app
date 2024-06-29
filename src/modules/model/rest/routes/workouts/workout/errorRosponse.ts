import { generateSchema } from "@anatine/zod-openapi";
import { errorResponseBodySchema } from "../../../errorResponse";

export const error400ResponseOpenApiSchema = generateSchema(
  errorResponseBodySchema.openapi({
    title: "Bad Request",
    example: {
      error: {
        message: "Bad Request",
      },
    },
  }),
);
