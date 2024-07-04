import { workoutsSchema } from "@/modules/model/api/routes/workouts/outputs/workoutsDataSchemas";
import { workoutSchema } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas";
import { hardCodedMockWorkout } from "@/modules/model/api/routes/workouts-id/mockData/workoutMock";
import { WorkoutCollections } from "@/modules/model/api/routes/workouts/inputs/inputs";

import { hardCodedMockWorkouts } from "@/modules/model/api/routes/workouts/mockData/workoutsMock";

class GetWorkoutData {
  email: string;

  constructor(email: string) {
    this.email = email;
  }

  static getWorkoutData(collectionName: WorkoutCollections, limitBy: number) {
    return workoutSchema
      .array()
      .parse(hardCodedMockWorkout(collectionName, limitBy));
  }

  getWorkoutsData() {
    return workoutsSchema.parse(hardCodedMockWorkouts(this.email));
  }
}

export default GetWorkoutData;
