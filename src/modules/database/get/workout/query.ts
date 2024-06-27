import {
  query,
  collection,
  orderBy,
  where,
  limit,
  firestoreDb,
} from "@/modules/database/config/db";

class DatabaseQueries {
  constructor(private readonly email: string) {
    this.email = email;
  }

  workoutCollectionQuery(workoutCollection: string, limitBy: number) {
    return query(
      collection(firestoreDb, workoutCollection),
      limit(limitBy),
      orderBy("date", "desc"),
      where("user", "==", this.email)
    );
  }
}

export default DatabaseQueries;
