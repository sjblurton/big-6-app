import { NextRequest } from "next/server";
import ErrorHandler from "@/modules/rest/error-handler/ErrorHandler";

import WorkoutsController from "./workouts.controller";

export async function GET(request: NextRequest) {
  try {
    const controller = new WorkoutsController(request);
    return await controller.GET();
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle();
    return errorResponse;
  }
}
