import { Responses } from "@/modules/rest/responses/responses";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";

import { WorkoutsService } from "./workouts.service";

class WorkoutsController {
  request: Request;

  constructor(
    request: Request,
    private readonly workoutsService: WorkoutsService = new WorkoutsService(
      request,
    ),
  ) {
    this.request = request;
  }

  async GET(): Promise<Response> {
    const email = this.request.headers.get("x-user-email");

    const parsedEmail = WorkoutValidation.validateEmail(email);

    if (!parsedEmail.success) {
      return Responses.createForbiddenResponse();
    }

    const parsedWorkoutData =
      await this.workoutsService.getWorkoutCollections();

    return Responses.createJSONResponse(parsedWorkoutData);
  }
}

export default WorkoutsController;
