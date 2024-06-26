import { z } from "zod";
import { emailSchema } from "../../workouts/inputs/inputs";

export const workoutSchema = z.object({
  key: z.string(),
  date: z.object({
    seconds: z.number(),
    nanoseconds: z.number(),
  }),
  reps: z.array(z.number().min(1).max(200)).max(100),
  level: z.number().min(1).max(10).int(),
  workout: z.string(),
  comments: z.string().optional(),
  user: emailSchema,
});

export type WorkoutData = z.infer<typeof workoutSchema>;
