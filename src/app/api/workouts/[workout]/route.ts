import { WorkoutCollections } from "@/modules/model/workouts";
import WorkoutController from "./workout.controller";

export async function GET(
  request: Request,
  { params }: { params: { workout: WorkoutCollections } },
) {
  const controller = new WorkoutController(request, params);
  return controller.GET();
}
