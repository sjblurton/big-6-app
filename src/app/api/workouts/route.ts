import { NextRequest } from "next/server";
import WorkoutsController from "./workouts.controller";

export async function GET(request: NextRequest) {
  const controller = new WorkoutsController(request);
  return controller.GET();
}
