import { NextRequest } from "next/server";
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";
import { WorkoutService } from "../services/workout.service";
import Controller from "../../data-layer/controller";

class WorkoutController extends Controller<WorkoutData[]> {
  private readonly workoutService: WorkoutService;

  workoutId: WorkoutIds;

  constructor(request: NextRequest, params: { id: WorkoutIds }) {
    super(request);
    this.workoutId = params.id;
    this.workoutService = new WorkoutService(request, params.id);
  }

  async getServiceData() {
    return this.workoutService.getServiceData();
  }
}

export default WorkoutController;
