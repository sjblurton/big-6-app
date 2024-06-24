import WorkoutsController from "./workouts.controller";

export async function GET(request: Request) {
  const controller = new WorkoutsController(request);
  return controller.GET();
}
