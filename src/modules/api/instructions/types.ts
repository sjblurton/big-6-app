import { WorkoutInstruction } from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";

export type SingleWorkoutInstruction = WorkoutInstruction;
export type MultipleWorkoutInstructions = WorkoutInstruction[];

export type InstructionReturnType<Level extends number | undefined> =
  Level extends number ? SingleWorkoutInstruction : MultipleWorkoutInstructions;

export type InstructionParams = {
  id: WorkoutIds;
  level?: string;
};
