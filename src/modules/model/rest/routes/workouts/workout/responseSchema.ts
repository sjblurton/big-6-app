import { WorkoutCollections } from "@/modules/model/workouts";
import { generateSchema } from "@anatine/zod-openapi";
import { generateWorkoutResponseSchema } from "../responsSechema";

export const workoutOpenApiSchema = (workout: WorkoutCollections) =>
  generateSchema(generateWorkoutResponseSchema(workout));
