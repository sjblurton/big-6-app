import {
  WorkoutCollections,
  workoutCollectionsSchema,
} from "@/modules/model/rest/routes/workouts/inputs/inputs";
import { WorkoutData } from "@/modules/model/rest/routes/workouts-id/outputs/workoutDataSchemas";
import { limitBySchema } from "@/modules/model/rest/routes/workouts-id/inputs/querySchema";
import {
  API_ERROR_NAMES,
  ApiError,
  HTTP_ERROR_CODES,
} from "@/modules/api/error-handler/ApiErrors";
import { NextRequest } from "next/server";
import GetWorkoutData from "@/modules/database/workouts/get/getWorkoutData";
import BaseService from "../../baseClasses/base.service";

export class WorkoutService extends BaseService<WorkoutData[]> {
  private workoutCollection: WorkoutCollections;

  constructor(request: NextRequest, workoutCollection: WorkoutCollections) {
    super(request);
    this.workoutCollection = workoutCollection;
  }

  async getServiceData() {
    return GetWorkoutData.getWorkoutData(
      this.validateUrlParams(),
      this.validateSearchParams(),
    );
  }

  private validateUrlParams() {
    const safeWorkout = workoutCollectionsSchema.safeParse(
      this.workoutCollection,
    );
    if (!safeWorkout.success) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.BAD_REQUEST,
        httpCode: HTTP_ERROR_CODES.BAD_REQUEST,
        description: "Invalid workout parameter",
        isOperational: true,
      });
    }
    return safeWorkout.data;
  }

  private validateSearchParams() {
    const { searchParams } = new URL(this.request.url);
    const value = searchParams.get("limitBy");
    const limitBy = value ? parseInt(value, 10) : undefined;

    const safeLimitBy = limitBySchema.safeParse(limitBy);
    if (!safeLimitBy.success) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.BAD_REQUEST,
        httpCode: HTTP_ERROR_CODES.BAD_REQUEST,
        description: "Invalid limitBy parameter: must be a positive integer",
        isOperational: true,
        cause: safeLimitBy.error,
      });
    }
    return safeLimitBy.data;
  }
}
