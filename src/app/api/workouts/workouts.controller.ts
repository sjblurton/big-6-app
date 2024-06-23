import { getServerSession } from "next-auth";
import { Responses } from "@/modules/rest/responses/responses";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";

import { WorkoutsService } from "./workouts.service";
import authOptions from "../auth/authOptions";

class WorkoutsController {
  request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async POST(): Promise<Response> {
    const session = await getServerSession(authOptions);

    if (!session) {
      return Responses.createUnauthorizedResponse();
    }

    const parsedLimitBy = await WorkoutsService.getJson(this.request).catch(
      () => ({
        limitBy: 12,
      }),
    );

    const parsedEmail = WorkoutValidation.validateEmail(session.user?.email);

    if (!parsedEmail.success) {
      return Responses.createForbiddenResponse();
    }

    const parsedWorkoutData = await WorkoutsService.getWorkoutCollections({
      email: parsedEmail.data,
      limitBy: parsedLimitBy.limitBy,
    });

    return Responses.createJSONResponse(parsedWorkoutData);
  }
}

export default WorkoutsController;
