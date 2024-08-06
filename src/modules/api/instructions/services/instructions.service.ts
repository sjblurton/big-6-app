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
import { ApiInternalServerError } from "../../error-handler/errors/api.error.internal-server";
import { ApiBadRequestError } from "../../error-handler/errors/api.error.bad-request";

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

const paramsSchema = z.object({
  level: z
    .string()
    .regex(/^([1-9]|10)$/)
    .optional()
    .transform((value) => (value ? Number(value) : undefined)),
  id: z.enum(WORKOUT_ID_LIST).optional(),
});

type InstructionParamsParsed = z.infer<typeof paramsSchema>;

class InstructionsService {
  params: InstructionParamsParsed;

  constructor(_request: NextRequest, params: InstructionParams) {
    this.params = InstructionsService.validateParams(params);
  }

  async parseWorkoutData() {
    if (this.params.id === undefined) {
      return this.parseWorkoutsOverviews(workoutInstructions);
    }
    if (this.params.level === undefined && this.params.id !== undefined) {
      return this.parseWorkoutOverview(workoutInstructions);
    }
    if (this.params.level !== undefined && this.params.id !== undefined) {
      const workoutIdInstructions = this.filterById(workoutInstructions);
      return this.parseWorkoutLevelInstructions(workoutIdInstructions);
    }

    throw new ApiBadRequestError({ description: "Invalid request parameters" });
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

  private filterById(data: WorkoutInstruction[]) {
    const workoutIdInstructions = data.filter(
      (instruction) => instruction.workoutId === this.params.id,
    );

    if (!workoutIdInstructions.length) {
      throw new ApiNotFoundError({
        description: `Workout instructions for id: ${this.params.id} not found`,
      });
    }
    return workoutIdInstructions;
  }

  private filterByLevel(data: WorkoutInstruction[]) {
    const workoutLevelInstructions = data.find(
      (instruction) => instruction.level === this.params.level,
    );

    if (!workoutLevelInstructions) {
      throw new ApiNotFoundError({
        description: `Workout instructions for level: ${this.params.level} not found`,
      });
    }
    return workoutLevelInstructions;
  }

  private parseWorkoutLevelInstructions(
    workoutIdInstructions: WorkoutInstruction[],
  ): WorkoutInstruction {
    return this.filterByLevel(workoutIdInstructions);
  }

  private parseWorkoutOverview(
    workoutIdInstructions: WorkoutInstruction[],
  ): WorkoutOverview {
    if (this.params.id === undefined) {
      throw new ApiInternalServerError({
        description: "Workout id is undefined",
      });
    }
    const workoutTitle = workoutOverviewDescriptions[this.params.id];

    return workoutOverviewSchema.parse({
      ...workoutTitle,
      levelNames: workoutIdInstructions.map((instruction) => instruction.name),
    });
  }

  private parseWorkoutsOverviews(
    workoutIdInstructions: WorkoutInstruction[],
  ): WorkoutOverview[] {
    if (this.params.id !== undefined) {
      throw new ApiInternalServerError({
        description: "Workout id is defined",
      });
    }
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
