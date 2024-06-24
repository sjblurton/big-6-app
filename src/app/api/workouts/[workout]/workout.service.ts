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
import { limitBySchema } from "@/modules/rest/schemas/openapiSchema";

export class WorkoutService {
  request: Request;

  constructor(request: Request) {
    this.request = request;
  }

  async getWorkoutCollection({
    email,
    workoutCollection,
  }: {
    email: string;
    workoutCollection: WorkoutCollections;
  }) {
    const q = query(
      collection(firestoreDb, workoutCollection),
      limit(this.getSearchParams()),
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
      return safeLimitBy.error;
    }
    return true;
  }
}
