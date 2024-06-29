import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { WorkoutCollections } from "@/modules/model/workouts";
import { NextResponse } from "next/server";
import { WorkoutService } from "./workout.service";

class WorkoutController {
  request: Request;

  workoutCollection: WorkoutCollections;

  constructor(
    request: Request,
    params: { workout: WorkoutCollections },
    private readonly workoutService: WorkoutService = new WorkoutService(
      request,
    ),
  ) {
    this.workoutCollection = params.workout;
    this.request = request;
  }

  async GET(): Promise<Response> {
    const email = this.request.headers.get("x-user-email");

    WorkoutValidation.validateEmail(email);

    WorkoutValidation.validateWorkoutCollection(this.workoutCollection);

    const parsedWorkoutData = await this.workoutService.getWorkoutCollection({
      workoutCollection: this.workoutCollection,
    });

    return NextResponse.json({
      ...parsedWorkoutData,
    });
  }
}

export default WorkoutController;
