import { workoutsSchema } from "@/modules/model/rest/routes/workouts/outputs/workoutsDataSchemas";
import { workoutSchema } from "@/modules/model/rest/routes/workouts-id/outputs/workoutDataSchemas";
import { hardCodedMockWorkout } from "@/modules/model/rest/routes/workouts-id/mockData/workoutMock";
import { WorkoutCollections } from "@/modules/model/rest/routes/workouts/inputs/inputs";

import { hardCodedMockWorkouts } from "@/modules/model/rest/routes/workouts/mockData/workoutsMock";

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
