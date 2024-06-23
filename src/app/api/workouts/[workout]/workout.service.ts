import { WorkoutCollections } from "@/modules/model/workouts";
import {
  firestoreDb,
  query,
  collection,
  orderBy,
  getDocs,
  where,
  limit,
} from "@/modules/database/config/db";
import WorkoutValidation from "@/modules/model/workouts/WorkoutValidation";
import { requestBodySchema } from "@/modules/rest/schemas/openapiSchema";

export class WorkoutService {
  static async getWorkoutCollection({
    email,
    workoutCollection,
    limitBy,
  }: {
    email: string;
    workoutCollection: WorkoutCollections;
    limitBy: number;
  }) {
    const q = query(
      collection(firestoreDb, workoutCollection),
      limit(limitBy),
      orderBy("date", "desc"),
      where("user", "==", email),
    );

    const workoutColSnapshot = await getDocs(q);

    const workoutColList = workoutColSnapshot.docs.map((doc) => {
      const workout = {
        key: doc.id,
        ...doc.data(),
      };
      return WorkoutValidation.validateWorkoutEmailLiteral(workout, email);
    });

    return workoutColList.filter((workout) => workout !== null);
  }

  static async getJson(request: Request) {
    return requestBodySchema.parseAsync(await request.json());
  }
}
