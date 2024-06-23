import WorkoutsController from "./workouts.controller";

export async function POST(request: Request) {
  const controller = new WorkoutsController(request);
  return controller.POST();
}
