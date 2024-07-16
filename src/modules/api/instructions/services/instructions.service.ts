import { NextRequest } from "next/server";
import { WorkoutInstruction } from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import workoutInstructions from "@/modules/model/api/routes/instructions-id/data";
import { z } from "zod";
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workoutIds";

import { ApiNotFoundError } from "../../error-handler/errors/api.error.not-found";
import { ApiZodValidationError } from "../../error-handler/errors/api.error.zod-validation";
import Service from "../../data-layer/service";
import { InstructionParams } from "../types";

const paramsSchema = z.object({
  level: z
    .string()
    .regex(/^([1-9]|10)$/)
    .optional()
    .transform((value) => (value ? Number(value) : undefined)),
  id: z.enum(WORKOUT_ID_LIST),
});

type InstructionParamsParsed = z.infer<typeof paramsSchema>;

class InstructionsService extends Service<
  WorkoutInstruction[] | WorkoutInstruction
> {
  params: InstructionParamsParsed;

  constructor(request: NextRequest, params: InstructionParams) {
    super(request);
    this.params = InstructionsService.validateParams(params);
  }

  async getData(): Promise<WorkoutInstruction[] | WorkoutInstruction> {
    const data = this.filterById(workoutInstructions);
    return this.getInstructionData(data);
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
        isOperational: false,
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
        isOperational: false,
      });
    }
    return workoutLevelInstructions;
  }

  private getInstructionData(
    workoutIdInstructions: WorkoutInstruction[],
  ): WorkoutInstruction[] | WorkoutInstruction {
    if (this.params.level === undefined) {
      return workoutIdInstructions;
    }

    const workoutLevelInstructions = this.filterByLevel(workoutIdInstructions);

    return workoutLevelInstructions;
  }
}

export default InstructionsService;
