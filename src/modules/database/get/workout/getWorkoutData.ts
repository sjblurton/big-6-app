import {
  COLLECTION_NAMES,
  getDocs,
  WORKOUT_COLLECTIONS,
} from "@/modules/database/config/db";

import {
  WorkoutsData,
  workoutsSchema,
} from "@/modules/model/rest/routes/workouts/outputs/workoutsDataSchemas";
import { workoutSchema } from "@/modules/model/rest/routes/workouts-id/outputs/workoutDataSchemas";
import DatabaseQueries from "./query";

class GetWorkoutData {
  email: string;

  private queries: DatabaseQueries;

  private workoutData: WorkoutsData;

  constructor(email: string) {
    this.email = email;
    this.queries = new DatabaseQueries(this.email);

    this.workoutData = {
      [COLLECTION_NAMES.LEG_RAISES]: [],
      [COLLECTION_NAMES.PULL_UPS]: [],
      [COLLECTION_NAMES.BRIDGES]: [],
      [COLLECTION_NAMES.HANDSTANDS]: [],
      [COLLECTION_NAMES.PUSH_UPS]: [],
      [COLLECTION_NAMES.SQUATS]: [],
    };
  }

  async getWorkoutData(collectionName: string, limitBy: number) {
    const q = this.queries.workoutCollectionQuery(collectionName, limitBy);
    const workoutColSnapshot = await getDocs(q);
    const workoutColList = workoutColSnapshot.docs.map((doc) => {
      const workout = {
        key: doc.id,
        ...doc.data(),
      };
      return workout;
    });

    return workoutSchema
      .array()
      .parse(workoutColList.filter((workout) => workout !== null));
  }

  async getWorkoutsData(limitBy: number) {
    const workoutCollectionPromises = WORKOUT_COLLECTIONS.map(
      async (workoutType) => {
        const collectionData = await this.getWorkoutData(workoutType, limitBy);
        return { workoutType, collectionData };
      },
    );
    const workoutCollectionResults = await Promise.all(
      workoutCollectionPromises,
    );

    this.workoutData = workoutCollectionResults.reduce(
      (acc, { workoutType, collectionData }) => {
        acc[workoutType] = collectionData;
        return acc;
      },
      {} as WorkoutsData,
    );

    return workoutsSchema.parse(this.workoutData);
  }
}

export default GetWorkoutData;
