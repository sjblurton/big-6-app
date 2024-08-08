import ErrorHandler from "@/modules/api/error-handler/ErrorHandler";
import InstructionsController from "@/modules/api/instructions/controllers/instructions.controller";
import { InstructionParams } from "@/modules/api/instructions/services/instructions.service";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Pick<InstructionParams, "name"> },
) {
  try {
    const controller = new InstructionsController(request, params);
    return await controller.GET();
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle();
    return errorResponse;
  }
}
