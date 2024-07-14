import { z } from "zod";

import { workoutSchema } from "../../workouts-id/outputs/workoutDataSchemas";
import { WORKOUT_IDS } from "../../shared/workoutIds";

export const workoutsSchema = z.object({
  [WORKOUT_IDS.PULL_UPS]: workoutSchema.array(),
  [WORKOUT_IDS.PUSH_UPS]: workoutSchema.array(),
  [WORKOUT_IDS.SQUATS]: workoutSchema.array(),
  [WORKOUT_IDS.LEG_RAISES]: workoutSchema.array(),
  [WORKOUT_IDS.HANDSTANDS]: workoutSchema.array(),
  [WORKOUT_IDS.BRIDGES]: workoutSchema.array(),
});

export type WorkoutsData = z.infer<typeof workoutsSchema>;
