import { z } from "zod";
import { COLLECTION_NAMES } from "@/modules/database/config/db";
import { workoutSchema } from "../../workouts-id/outputs/workoutDataSchemas";

export const workoutsSchema = z.object({
  [COLLECTION_NAMES.PULL_UPS]: workoutSchema.array(),
  [COLLECTION_NAMES.PUSH_UPS]: workoutSchema.array(),
  [COLLECTION_NAMES.SQUATS]: workoutSchema.array(),
  [COLLECTION_NAMES.LEG_RAISES]: workoutSchema.array(),
  [COLLECTION_NAMES.HANDSTANDS]: workoutSchema.array(),
  [COLLECTION_NAMES.BRIDGES]: workoutSchema.array(),
});

export type WorkoutsData = z.infer<typeof workoutsSchema>;
