import { z } from "zod";
import { WORKOUT_ID_LIST } from "@/modules/database/config/db";
import { emailSchema } from "../../workouts/inputs/inputs";

export const workoutSchema = z.object({
  key: z.string(),
  date: z.number(),
  reps: z.array(z.number().min(1).max(200)).max(100),
  level: z.number().min(1).max(10).int(),
  workoutId: z.enum(WORKOUT_ID_LIST),
  comments: z.string().optional(),
  user: emailSchema,
});

export type WorkoutData = z.infer<typeof workoutSchema>;
