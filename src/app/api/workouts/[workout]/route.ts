import WorkoutController from "./workout.controller";

export async function GET(
  request: Request,
  {params}: {params: {workout: string}}
) {
  const controller = new WorkoutController(request, params);
  return controller.GET();
}
