import { NextRequest, NextResponse } from "next/server";
import InstructionsService from "../services/instructions.service";
import { InstructionParams } from "../types";

class InstructionsController {
  params: InstructionParams;

  private readonly instructionsService: InstructionsService;

  constructor(request: NextRequest, params: InstructionParams) {
    this.params = params;
    this.instructionsService = new InstructionsService(request, params);
  }

  async GET() {
    return NextResponse.json(await this.instructionsService.parseWorkoutData());
  }
}

export default InstructionsController;
