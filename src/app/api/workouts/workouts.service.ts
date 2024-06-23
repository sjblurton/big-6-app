import { WorkoutCollections, WorkoutData } from "@/modules/model/workouts";
import { WORKOUT_COLLECTIONS } from "@/modules/database/config/db";
import { requestBodySchema } from "@/modules/rest/schemas/openapiSchema";
import { WorkoutService } from "./[workout]/workout.service";

export class WorkoutsService {
  static async getWorkoutCollections({
    email,
    limitBy,
  }: {
    email: string;
    limitBy: number;
  }) {
    const workoutData: Record<WorkoutCollections, WorkoutData[]> = {
      "leg-raises": [],
      "pull-ups": [],
      "push-ups": [],
      squats: [],
      handstands: [],
      bridges: [],
    };

    const workoutCollectionPromises = WORKOUT_COLLECTIONS.map(
      async (workoutType) => {
        const collectionData = await WorkoutService.getWorkoutCollection({
          email,
          workoutCollection: workoutType,
          limitBy,
        });
        return { workoutType, collectionData };
      },
    );

    const workoutCollectionResults = await Promise.all(
      workoutCollectionPromises,
    );

    workoutCollectionResults.forEach(({ workoutType, collectionData }) => {
      workoutData[workoutType] = collectionData;
    });

    return workoutData;
  }

  static async getJson(request: Request) {
    return requestBodySchema.parseAsync(await request.json());
  }
}
