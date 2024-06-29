import { WorkoutCollections, WorkoutData } from "@/modules/model/workouts";

import GetWorkoutData from "@/modules/database/get/workout/getWortoutData";
import { z } from "zod";
import { limitBySchema } from "@/modules/model/rest/routes/workouts/workout/querySchema";
import {
  API_ERROR_NAMES,
  ApiError,
  HTTP_ERROR_CODES,
} from "@/modules/rest/error-handler/ApiErrors";

export class WorkoutService {
  private readonly request: Request;

  private readonly getWorkoutData: GetWorkoutData;

  constructor(request: Request) {
    this.request = request;

    const email = this.getEmailFromHeaders();

    this.getWorkoutData = new GetWorkoutData(email);
  }

  private getEmailFromHeaders(): string {
    const email = this.request.headers.get("x-user-email");
    if (!email) {
      throw new Error("Email header is missing");
    }
    return z.string().email().parse(email);
  }

  async getWorkoutCollection({
    workoutCollection,
  }: {
    workoutCollection: WorkoutCollections;
  }): Promise<WorkoutData[]> {
    return this.getWorkoutData.getWorkoutData(
      workoutCollection,
      this.validateSearchParams(),
    );
  }

  validateSearchParams() {
    const { searchParams } = new URL(this.request.url);
    const value = searchParams.get("limitBy");
    const limitBy = value ? parseInt(value, 10) : undefined;

    const safeLimitBy = limitBySchema.safeParse(limitBy);

    if (!safeLimitBy.success) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.BAD_REQUEST,
        httpCode: HTTP_ERROR_CODES.BAD_REQUEST,
        description: "Invalid limitBy parameter: must be a positive integer",
      });
    }
    return safeLimitBy.data;
  }
}
