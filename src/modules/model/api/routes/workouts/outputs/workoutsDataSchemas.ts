import { z } from "zod";

import { workoutSchema } from "../../workouts-id/outputs/workoutDataSchemas";
import { WORKOUT_IDS } from "../../shared/workoutIds";

export const workoutsSchema = z.object({
  [WORKOUT_IDS.PULL_UPS.key]: workoutSchema.array(),
  [WORKOUT_IDS.PUSH_UPS.key]: workoutSchema.array(),
  [WORKOUT_IDS.SQUATS.key]: workoutSchema.array(),
  [WORKOUT_IDS.LEG_RAISES.key]: workoutSchema.array(),
  [WORKOUT_IDS.HANDSTANDS.key]: workoutSchema.array(),
  [WORKOUT_IDS.BRIDGES.key]: workoutSchema.array(),
});

export type WorkoutsData = z.infer<typeof workoutsSchema>;
