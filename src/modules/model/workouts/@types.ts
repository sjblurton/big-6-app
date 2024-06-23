import { z } from "zod";
import workoutSchema, { workoutCollectionsSchema } from "./workoutSchemas";

export type WorkoutCollections = z.infer<typeof workoutCollectionsSchema>;

export type WorkoutData = z.infer<typeof workoutSchema>;
