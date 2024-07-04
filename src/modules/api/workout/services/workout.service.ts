import {
  WorkoutCollections,
  workoutCollectionsSchema,
} from "@/modules/model/api/routes/workouts/inputs/inputs";
import { WorkoutData } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { limitBySchema } from "@/modules/model/api/routes/workouts-id/inputs/querySchema";
import { NextRequest } from "next/server";
import GetWorkoutData from "@/modules/database/workouts/read/getWorkoutData";
import BaseService from "../../baseClasses/base.service";
import { ApiBadRequestError } from "../../error-handler/errors/api.error.bad-request";

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
      throw new ApiBadRequestError({
        description: "Invalid workout",
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
      throw new ApiBadRequestError({
        description: "Invalid limitBy parameter: must be a positive integer",
        isOperational: true,
      });
    }
    return safeLimitBy.data;
  }
}
