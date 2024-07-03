import { NextRequest } from "next/server";
import { WorkoutData } from "@/modules/model/rest/routes/workouts-id/outputs/workoutDataSchemas";
import { WorkoutCollections } from "@/modules/model/rest/routes/workouts/inputs/inputs";
import { WorkoutService } from "../services/workout.service";
import BaseController from "../../baseClasses/base.controller";

class WorkoutController extends BaseController<WorkoutData[]> {
  private readonly workoutService: WorkoutService;

  workoutCollection: WorkoutCollections;

  constructor(request: NextRequest, params: { workout: WorkoutCollections }) {
    super(request);
    this.workoutCollection = params.workout;
    this.workoutService = new WorkoutService(request, params.workout);
  }

  async getServiceData() {
    return this.workoutService.getServiceData();
  }
}

export default WorkoutController;
