import {
  COLLECTION_NAMES,
  getDocs,
  WORKOUT_COLLECTIONS,
} from "@/modules/database/config/db";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { WorkoutCollections, WorkoutData } from "@/modules/model/workouts";
import DatabaseQueries from "./query";

class GetWorkoutData {
  email: string;

  private queries: DatabaseQueries;

  private workoutNames: Record<WorkoutCollections, WorkoutData[]>;

  constructor(email: string) {
    this.email = email;
    this.queries = new DatabaseQueries(this.email);

    this.workoutNames = {
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
      return WorkoutValidation.validateWorkoutEmailLiteral(workout, this.email);
    });
    return workoutColList.filter((workout) => workout !== null);
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

    workoutCollectionResults.forEach(({ workoutType, collectionData }) => {
      this.workoutNames[workoutType] = collectionData;
    });

    return this.workoutNames;
  }
}

export default GetWorkoutData;
