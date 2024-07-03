import { emailSchema } from "@/modules/model/rest/routes/workouts/inputs/inputs";
import {
  API_ERROR_NAMES,
  ApiError,
  HTTP_ERROR_CODES,
} from "@/modules/api/error-handler/ApiErrors";
import GetWorkoutData from "@/modules/database/workouts/get/getWorkoutData";
import { NextRequest } from "next/server";

abstract class BaseService<Data> {
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
      throw new ApiError({
        codeName: API_ERROR_NAMES.FORBIDDEN,
        httpCode: HTTP_ERROR_CODES.FORBIDDEN,
        description: "No email provided",
      });
    }
    return safe.data;
  }

  abstract getServiceData(): Promise<Data>;
}

export default BaseService;
