import { z } from "zod";
import { WORTOUT_IDS } from "@/modules/database/config/db";
import { workoutSchema } from "../../workouts-id/outputs/workoutDataSchemas";

export const workoutsSchema = z.object({
  [WORTOUT_IDS.PULL_UPS]: workoutSchema.array(),
  [WORTOUT_IDS.PUSH_UPS]: workoutSchema.array(),
  [WORTOUT_IDS.SQUATS]: workoutSchema.array(),
  [WORTOUT_IDS.LEG_RAISES]: workoutSchema.array(),
  [WORTOUT_IDS.HANDSTANDS]: workoutSchema.array(),
  [WORTOUT_IDS.BRIDGES]: workoutSchema.array(),
});

export type WorkoutsData = z.infer<typeof workoutsSchema>;
