import { getServerSession } from "next-auth";
import { Responses } from "@/modules/rest/responses/responses";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { WorkoutService } from "./workout.service";
import authOptions from "../../auth/authOptions";

class WorkoutController {
  request: Request;

  workoutCollection: string;

  constructor(request: Request, params: { workout: string }) {
    this.request = request;
    this.workoutCollection = params.workout;
  }

  async POST(): Promise<Response> {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Responses.createUnauthorizedResponse();
    }

    const parsedWorkoutCollection = WorkoutValidation.validateWorkoutCollection(
      this.workoutCollection,
    );

    const parsedLimitBy = await WorkoutService.getJson(this.request).catch(
      () => ({
        limitBy: 12,
      }),
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

    const parsedWorkoutData = await WorkoutService.getWorkoutCollection({
      email: parsedEmail.data,
      workoutCollection: parsedWorkoutCollection.data,
      limitBy: parsedLimitBy.limitBy,
    });

    return Responses.createJSONResponse(parsedWorkoutData);
  }
}

export default WorkoutController;
