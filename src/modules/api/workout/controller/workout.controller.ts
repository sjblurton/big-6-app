import { NextRequest } from "next/server";
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";
import { WorkoutService } from "../services/workout.service";
import BaseController from "../../baseClasses/base.controller";

class WorkoutController extends BaseController<WorkoutData[]> {
  private readonly workoutService: WorkoutService;

  workoutCollection: WorkoutIds;

  constructor(request: NextRequest, params: { id: WorkoutIds }) {
    super(request);
    this.workoutCollection = params.id;
    this.workoutService = new WorkoutService(request, params.id);
  }

  async getServiceData() {
    return this.workoutService.getServiceData();
  }
}

export default WorkoutController;
