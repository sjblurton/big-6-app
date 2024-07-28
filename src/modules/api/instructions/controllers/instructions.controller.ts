import { NextRequest } from "next/server";
import {
  WorkoutInstruction,
  WorkoutOverview,
} from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import Controller from "../../data-layer/controller";
import InstructionsService from "../services/instructions.service";
import { InstructionParams } from "../types";

class InstructionsController extends Controller<
  WorkoutOverview | WorkoutInstruction
> {
  params: InstructionParams;

  private readonly instructionsService: InstructionsService;

  constructor(request: NextRequest, params: InstructionParams) {
    super(request);
    this.params = params;
    this.instructionsService = new InstructionsService(request, params);
  }

  async getServiceData(): Promise<WorkoutOverview | WorkoutInstruction> {
    return this.instructionsService.getData();
  }
}

export default InstructionsController;
