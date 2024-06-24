import { getServerSession } from "next-auth";
import { Responses } from "@/modules/rest/responses/responses";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";

import { WorkoutsService } from "./workouts.service";
import authOptions from "../auth/authOptions";

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
    const session = await getServerSession(authOptions);

    if (!session) {
      return Responses.createUnauthorizedResponse();
    }

    const parsedEmail = WorkoutValidation.validateEmail(session.user?.email);

    if (!parsedEmail.success) {
      return Responses.createForbiddenResponse();
    }

    const parsedWorkoutData = await this.workoutsService.getWorkoutCollections({
      email: parsedEmail.data,
    });

    return Responses.createJSONResponse(parsedWorkoutData);
  }
}

export default WorkoutsController;
