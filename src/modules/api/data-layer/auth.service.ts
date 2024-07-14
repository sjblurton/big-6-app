import { emailSchema } from "@/modules/model/api/routes/workouts/inputs/inputs";
import GetWorkoutData from "@/modules/database/workouts/read/getWorkoutData";
import { NextRequest } from "next/server";
import { ApiForbiddenError } from "../error-handler/errors/api.error.forbidden";

abstract class AuthService<Data> {
  protected readonly request: NextRequest;

  protected readonly getWorkoutData: GetWorkoutData;

  constructor(request: NextRequest) {
    this.request = request;
    const email = this.getEmailFromHeaders();
    this.getWorkoutData = new GetWorkoutData(email);
  }

  private getEmailFromHeaders(): string {
    const safe = emailSchema.safeParse(
      this.request.headers.get("x-user-email"),
    );
    if (!safe.success) {
      throw new ApiForbiddenError({
        description: "Forbidden",
        isOperational: true,
      });
    }
    return safe.data;
  }

  abstract getServiceData(): Promise<Data>;
}

export default AuthService;