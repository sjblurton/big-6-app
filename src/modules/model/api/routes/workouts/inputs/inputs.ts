import { WORKOUT_COLLECTIONS } from "@/modules/database/config/db";
import { z } from "zod";

export const workoutCollectionsSchema = z.enum(WORKOUT_COLLECTIONS);

export const emailSchema = z.string().email();

export type WorkoutCollections = z.infer<typeof workoutCollectionsSchema>;
