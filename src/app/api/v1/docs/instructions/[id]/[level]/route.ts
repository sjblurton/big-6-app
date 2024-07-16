import ErrorHandler from "@/modules/api/error-handler/ErrorHandler";
import InstructionsController from "@/modules/api/instructions/controllers/instructions.controller";
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: WorkoutIds; level: string } },
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
