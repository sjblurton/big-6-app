import { WORKOUT_ID_LIST } from "@/modules/database/config/db";
import { z } from "zod";

export const workoutIdsSchema = z.enum(WORKOUT_ID_LIST);

export const emailSchema = z.string().email();

export type WorkoutIds = z.infer<typeof workoutIdsSchema>;
