import ErrorHandler from "@/modules/api/error-handler/ErrorHandler";
import InstructionsController from "@/modules/api/instructions/controllers/instructions.controller";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const controller = new InstructionsController(request);
    return await controller.GET();
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle();
    return errorResponse;
  }
}
