import { NextRequest } from "next/server";
import Controller from "../../data-layer/controller";
import InstructionsService from "../services/instructions.service";
import { InstructionParams, InstructionReturnType } from "../types";

class InstructionsController<
  Level extends number | undefined,
> extends Controller<InstructionReturnType<Level>> {
  params: InstructionParams;

  private readonly instructionsService: InstructionsService<Level>;

  constructor(request: NextRequest, params: InstructionParams) {
    super(request);
    this.params = params;
    this.instructionsService = new InstructionsService(request, params);
  }

  async getServiceData(): Promise<InstructionReturnType<Level>> {
    return this.instructionsService.getServiceData();
  }
}

export default InstructionsController;
