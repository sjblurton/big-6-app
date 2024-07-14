import { NextRequest } from "next/server";
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";
import { WorkoutInstructions } from "@/modules/model/api/routes/instructions/outputs/workoutInstructionsSchema";
import workoutInstructions from "@/modules/model/api/routes/instructions/data";

import Controller from "../data-layer/controller";
import { ApiNotFoundError } from "../error-handler/errors/api.error.not-found";

class InstructionsController extends Controller<WorkoutInstructions> {
  id: WorkoutIds;

  constructor(request: NextRequest, params: { id: WorkoutIds }) {
    super(request);
    this.id = params.id;
  }

  async getServiceData() {
    const data = workoutInstructions.filter(
      (instruction) => instruction.workoutId === this.id,
    );

    if (data.length) {
      return data;
    }

    throw new ApiNotFoundError({
      description: `Workout instructions for id: ${this.id} not found`,
      isOperational: true,
    });
  }
}

export default InstructionsController;