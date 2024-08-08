import { NextRequest } from "next/server";
import { WorkoutOverview } from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import workoutInstructions, {
  Instruction,
} from "@/modules/model/api/routes/instructions-id/data";
import { z } from "zod";
import {
  WorkoutIds,
  WORKOUT_ID_LIST,
} from "@/modules/model/api/routes/shared/workoutIds";

import { pathLevelToNumber } from "@/modules/strings/transform";
import { levelArray } from "@/modules/model/api/routes/instructions-id-level/constants/levels";
import { workoutOverviewDescriptions } from "@/modules/model/api/routes/instructions-id/constants/workoutOverviewDescriptions";
import { ApiZodValidationError } from "../../error-handler/errors/api.error.zod-validation";
import { ApiNotFoundError } from "../../error-handler/errors/api.error.not-found";

const paramsSchema = z.object({
  level: z.enum(levelArray).optional(),
  name: z.enum(WORKOUT_ID_LIST),
});

type InstructionParamsParsed = z.infer<typeof paramsSchema>;
export type InstructionParams = z.input<typeof paramsSchema>;

class InstructionsService {
  params: InstructionParamsParsed;

  constructor(_request: NextRequest, params: InstructionParams) {
    this.params = InstructionsService.validateParams(params);
  }

  async parseWorkoutData() {
    if (this.params.level === undefined) {
      return InstructionsService.parseWorkoutOverview(this.params.name);
    }
    return InstructionsService.filterByLevel(
      this.params.name,
      pathLevelToNumber(this.params.level),
    );
  }

  static validateParams(params: InstructionParams) {
    const safe = paramsSchema.safeParse(params);

    if (!safe.success) {
      throw new ApiZodValidationError({
        cause: safe.error.issues,
        description: "Invalid request parameters",
      });
    }
    return safe.data;
  }

  private static filterById(id: WorkoutIds): Instruction[] {
    const workoutIdInstructions = workoutInstructions.filter(
      ({ workoutId }) => workoutId === id,
    );

    if (!workoutIdInstructions.length) {
      throw new ApiNotFoundError({
        description: `Workout instructions for id: ${id} not found`,
      });
    }
    return workoutIdInstructions;
  }

  private static filterByLevel(id: WorkoutIds, level: number): Instruction {
    const workoutLevelInstructions = InstructionsService.filterById(id).find(
      (instruction) => instruction.level === level,
    );

    if (!workoutLevelInstructions) {
      throw new ApiNotFoundError({
        description: `Workout instructions for level: ${level} not found`,
      });
    }
    return workoutLevelInstructions;
  }

  private static mapWorkoutLevelNames(id: WorkoutIds): string[] {
    return InstructionsService.filterById(id).map(
      (instruction) => instruction.name,
    );
  }

  private static parseWorkoutOverview(id: WorkoutIds): WorkoutOverview {
    const workoutTitle = workoutOverviewDescriptions[id];

    const levelNames = InstructionsService.mapWorkoutLevelNames(id);

    return {
      ...workoutTitle,
      levelNames,
    };
  }
}

export default InstructionsService;
