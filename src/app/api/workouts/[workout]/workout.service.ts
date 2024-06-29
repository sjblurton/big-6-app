import { WorkoutCollections, WorkoutData } from "@/modules/model/workouts";
import { limitBySchema } from "@/modules/model/rest/openapiSchema";
import GetWorkoutData from "@/modules/database/get/workout/getWortoutData";
import { z } from "zod";
import { ApiError } from "next/dist/server/api-utils";

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
      this.getSearchParams(),
    );
  }

  private getSearchParams() {
    const { searchParams } = new URL(this.request.url);
    const value = searchParams.get("limitBy");
    const limitBy = value ? parseInt(value, 10) : undefined;
    return limitBySchema.parse(limitBy);
  }

  validateSearchParams() {
    const { searchParams } = new URL(this.request.url);
    const value = searchParams.get("limitBy");
    const limitBy = value ? parseInt(value, 10) : undefined;

    const safeLimitBy = limitBySchema.safeParse(limitBy);

    if (!safeLimitBy.success) {
      throw new ApiError(
        400,
        "limitBy parameter should be a integer 1 or greater",
      );
    }
    return true;
  }
}
