import { Responses } from "@/modules/rest/responses/responses";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { ZodError } from "zod";
import { WorkoutService } from "./workout.service";

class WorkoutController {
  request: Request;

  workoutCollection: string;

  constructor(
    request: Request,
    params: { workout: string },
    private readonly workoutService: WorkoutService = new WorkoutService(
      request,
    ),
  ) {
    this.workoutCollection = params.workout;
    this.request = request;
  }

  async GET(): Promise<Response> {
    const email = this.request.headers.get("x-user-email");

    const parsedEmail = WorkoutValidation.validateEmail(email);

    const parsedWorkoutCollection = WorkoutValidation.validateWorkoutCollection(
      this.workoutCollection,
    );

    if (!parsedWorkoutCollection.success) {
      return Responses.createNotFoundResponse(
        `Workout collection ${this.workoutCollection} not found`,
      );
    }

    if (!parsedEmail.success) {
      return Responses.createForbiddenResponse();
    }

    const isValidSearchParam = this.workoutService.validateSearchParams();

    if (isValidSearchParam instanceof ZodError) {
      return Responses.createJSONBadRequestResponse(isValidSearchParam.errors);
    }

    const parsedWorkoutData = await this.workoutService.getWorkoutCollection({
      workoutCollection: parsedWorkoutCollection.data,
    });

    return Responses.createJSONResponse(parsedWorkoutData);
  }
}

export default WorkoutController;
