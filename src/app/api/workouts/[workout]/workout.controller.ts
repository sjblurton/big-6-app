import { getServerSession } from "next-auth";
import { Responses } from "@/modules/rest/responses/responses";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { ZodError } from "zod";
import { WorkoutService } from "./workout.service";
import authOptions from "../../auth/authOptions";

class WorkoutController {
  workoutCollection: string;

  constructor(
    request: Request,
    params: { workout: string },
    private readonly workoutService: WorkoutService = new WorkoutService(
      request,
    ),
  ) {
    this.workoutCollection = params.workout;
  }

  async GET(): Promise<Response> {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Responses.createUnauthorizedResponse();
    }

    const parsedWorkoutCollection = WorkoutValidation.validateWorkoutCollection(
      this.workoutCollection,
    );

    if (!parsedWorkoutCollection.success) {
      return Responses.createNotFoundResponse(
        `Workout collection ${this.workoutCollection} not found`,
      );
    }

    const parsedEmail = WorkoutValidation.validateEmail(session.user?.email);

    if (!parsedEmail.success) {
      return Responses.createForbiddenResponse();
    }

    const isValidSearchParam = this.workoutService.validateSearchParams();

    if (isValidSearchParam instanceof ZodError) {
      return Responses.createJSONBadRequestResponse(isValidSearchParam.errors);
    }

    const parsedWorkoutData = await this.workoutService.getWorkoutCollection({
      email: parsedEmail.data,
      workoutCollection: parsedWorkoutCollection.data,
    });

    return Responses.createJSONResponse(parsedWorkoutData);
  }
}

export default WorkoutController;
