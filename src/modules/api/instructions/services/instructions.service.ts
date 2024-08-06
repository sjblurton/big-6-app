import { NextRequest } from "next/server";
import {
  WorkoutInstruction,
  WorkoutOverview,
  workoutOverviewSchema,
} from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import workoutInstructions from "@/modules/model/api/routes/instructions-id/data";
import { z } from "zod";
import {
  WorkoutIds,
  WORKOUT_IDS,
  WORKOUT_ID_LIST,
} from "@/modules/model/api/routes/shared/workoutIds";

import { bridgesOverview } from "@/modules/model/api/routes/instructions-id/data/bridges";
import { handstandOverview } from "@/modules/model/api/routes/instructions-id/data/handstands";
import { legRaisesOverview } from "@/modules/model/api/routes/instructions-id/data/legRaises";
import { pullUpsOverview } from "@/modules/model/api/routes/instructions-id/data/pullUps";
import { pushUpOverview } from "@/modules/model/api/routes/instructions-id/data/pushUps";
import { squatOverview } from "@/modules/model/api/routes/instructions-id/data/squats";
import { InstructionParams } from "../types";
import { ApiZodValidationError } from "../../error-handler/errors/api.error.zod-validation";
import { ApiNotFoundError } from "../../error-handler/errors/api.error.not-found";

export const workoutOverviewDescriptions: {
  [key in WorkoutIds]: {
    title: string;
    description: string;
  };
} = {
  [WORKOUT_IDS.BRIDGES.key]: {
    title: WORKOUT_IDS.BRIDGES.label,
    description: bridgesOverview,
  },
  [WORKOUT_IDS.HANDSTANDS.key]: {
    title: WORKOUT_IDS.HANDSTANDS.label,
    description: handstandOverview,
  },
  [WORKOUT_IDS.LEG_RAISES.key]: {
    title: WORKOUT_IDS.LEG_RAISES.label,
    description: legRaisesOverview,
  },
  [WORKOUT_IDS.PULL_UPS.key]: {
    title: WORKOUT_IDS.PULL_UPS.label,
    description: pullUpsOverview,
  },
  [WORKOUT_IDS.PUSH_UPS.key]: {
    title: WORKOUT_IDS.PUSH_UPS.label,
    description: pushUpOverview,
  },
  [WORKOUT_IDS.SQUATS.key]: {
    title: WORKOUT_IDS.SQUATS.label,
    description: squatOverview,
  },
};

const paramsSchema = z
  .object({
    level: z
      .string()
      .regex(/^([1-9]|10)$/)
      .optional()
      .transform((value) => (value ? Number(value) : undefined)),
    id: z.enum(WORKOUT_ID_LIST),
  })
  .optional();

type InstructionParamsParsed = z.infer<typeof paramsSchema>;

class InstructionsService {
  params: InstructionParamsParsed;

  constructor(_request: NextRequest, params?: InstructionParams) {
    this.params = InstructionsService.validateParams(params);
  }

  async parseWorkoutData() {
    if (!this.params) {
      return InstructionsService.parseWorkoutsOverviews(workoutInstructions);
    }
    if (this.params.level === undefined) {
      return InstructionsService.parseWorkoutOverview(
        workoutInstructions,
        this.params.id,
      );
    }
    const workoutIdInstructions = InstructionsService.filterById(
      workoutInstructions,
      this.params.id,
    );
    return InstructionsService.parseWorkoutLevelInstructions(
      workoutIdInstructions,
      this.params.level,
    );
  }

  static validateParams(params?: InstructionParams) {
    const safe = paramsSchema.safeParse(params);

    if (!safe.success) {
      throw new ApiZodValidationError({
        cause: safe.error.issues,
        description: "Invalid request parameters",
      });
    }
    return safe.data;
  }

  private static filterById(data: WorkoutInstruction[], id: WorkoutIds) {
    const workoutIdInstructions = data.filter(
      (instruction) => instruction.workoutId === id,
    );

    if (!workoutIdInstructions.length) {
      throw new ApiNotFoundError({
        description: `Workout instructions for id: ${id} not found`,
      });
    }
    return workoutIdInstructions;
  }

  private static filterByLevel(data: WorkoutInstruction[], level: number) {
    const workoutLevelInstructions = data.find(
      (instruction) => instruction.level === level,
    );

    if (!workoutLevelInstructions) {
      throw new ApiNotFoundError({
        description: `Workout instructions for level: ${level} not found`,
      });
    }
    return workoutLevelInstructions;
  }

  private static parseWorkoutLevelInstructions(
    workoutIdInstructions: WorkoutInstruction[],
    level: number,
  ): WorkoutInstruction {
    return InstructionsService.filterByLevel(workoutIdInstructions, level);
  }

  private static parseWorkoutOverview(
    workoutIdInstructions: WorkoutInstruction[],
    id: WorkoutIds,
  ): WorkoutOverview {
    const workoutTitle = workoutOverviewDescriptions[id];

    return workoutOverviewSchema.parse({
      ...workoutTitle,
      levelNames: workoutIdInstructions.map((instruction) => instruction.name),
    });
  }

  private static parseWorkoutsOverviews(
    workoutIdInstructions: WorkoutInstruction[],
  ): WorkoutOverview[] {
    return WORKOUT_ID_LIST.map((id) => {
      const workoutTitle = workoutOverviewDescriptions[id];
      return workoutOverviewSchema.parse({
        ...workoutTitle,
        levelNames: workoutIdInstructions.map(
          (instruction) => instruction.name,
        ),
      });
    });
  }
}

export default InstructionsService;
