import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { NextRequest, NextResponse } from "next/server";
import { WorkoutsService } from "./workouts.service";

class WorkoutsController {
  request: NextRequest;

  constructor(
    request: NextRequest,
    private readonly workoutsService: WorkoutsService = new WorkoutsService(
      request,
    ),
  ) {
    this.request = request;
  }

  async GET(): Promise<Response> {
    WorkoutValidation.validateEmail(this.request.headers.get("x-user-email"));

    const parsedWorkoutData =
      await this.workoutsService.getWorkoutCollections();

    return NextResponse.json({
      ...parsedWorkoutData,
    });
  }
}

export default WorkoutsController;
