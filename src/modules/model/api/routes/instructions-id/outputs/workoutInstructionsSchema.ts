import { z } from "zod";
import { WORKOUT_ID_LIST } from "../../shared/workoutIds";

const setsAndRepsSchema = z.object({ sets: z.number(), reps: z.number() });

const negativePositiveSchema = z.object({
  positive: z.string(),
  negative: z.string(),
});

const exerciseSchema = z.object({
  workoutId: z.enum(WORKOUT_ID_LIST),
  name: z.string(),
  level: z.number().min(1).max(10).int(),
  progressions: z.object({
    beginner: setsAndRepsSchema,
    intermediate: setsAndRepsSchema,
    advanced: setsAndRepsSchema,
  }),
  directions: negativePositiveSchema,
  video: z.string().url(),
});

export const workoutInstructionsSchema = z.object({
  title: z.string(),
  description: z.string(),
  data: z.array(z.string()).min(10).max(10),
});

export type WorkoutInstruction = z.infer<typeof exerciseSchema>;

export type WorkoutOverview = {
  title: string;
  description: string;
  levelNames: string[];
};
