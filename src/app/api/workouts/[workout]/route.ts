import { WorkoutCollections } from "@/modules/model/rest/routes/workouts/inputs/inputs";
import { NextRequest } from "next/server";
import ErrorHandler from "@/modules/rest/error-handler/ErrorHandler";
import WorkoutController from "./workout.controller";

export async function GET(
  request: NextRequest,
  { params }: { params: { workout: WorkoutCollections } },
) {
  try {
    const controller = new WorkoutController(request, params);
    return await controller.GET();
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle();
    return errorResponse;
  }
}
