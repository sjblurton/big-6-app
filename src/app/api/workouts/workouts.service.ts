import {WorkoutCollections, WorkoutData} from "@/modules/model/workouts";
import {WORKOUT_COLLECTIONS} from "@/modules/database/config/db";

import {WorkoutService} from "./[workout]/workout.service";

export class WorkoutsService {
  request: Request;

  constructor(
    request: Request,
    private readonly workoutService: WorkoutService = new WorkoutService(
      request
    )
  ) {
    this.request = request;
  }

  async getWorkoutCollections({email}: {email: string}) {
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
        const collectionData = await this.workoutService.getWorkoutCollection({
          email,
          workoutCollection: workoutType,
        });
        return {workoutType, collectionData};
      }
    );

    const workoutCollectionResults = await Promise.all(
      workoutCollectionPromises
    );

    workoutCollectionResults.forEach(({workoutType, collectionData}) => {
      workoutData[workoutType] = collectionData;
    });

    return workoutData;
  }
}
