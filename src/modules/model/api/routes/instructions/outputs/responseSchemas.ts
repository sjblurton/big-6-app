import { extendApi, generateSchema } from "@anatine/zod-openapi";

import { workoutInstructionsSchema } from "./workoutInstructionsSchema";
import { bridges } from "../data/instructions";

export const workoutsInstructionsBody200ResponseSchema = extendApi(
  workoutInstructionsSchema,
  {
    description: "Instructions for a workout",
    example: [bridges[0]],
  },
);

export const workoutsInstructionsOpenApiSchema = generateSchema(
  workoutsInstructionsBody200ResponseSchema,
);
