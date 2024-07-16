import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";

export type InstructionParams = {
  id: WorkoutIds;
  level?: string;
};
