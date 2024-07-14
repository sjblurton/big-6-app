import { extendApi, generateSchema } from "@anatine/zod-openapi";

import { workoutsSchema } from "./workoutsDataSchemas";

export const workoutsBody200ResponseSchema = extendApi(workoutsSchema);

export const workoutsOpenApiSchema = generateSchema(
  workoutsBody200ResponseSchema,
);
