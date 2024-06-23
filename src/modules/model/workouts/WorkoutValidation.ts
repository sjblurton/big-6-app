import workoutSchema, {
  emailSchema,
  workoutCollectionsSchema,
  workoutSchemaEmailLiteral,
} from "./workoutSchemas";

class WorkoutValidation {
  static validateWorkoutCollection(workout: unknown) {
    return workoutCollectionsSchema.safeParse(workout);
  }

  static validateEmail(email: unknown) {
    return emailSchema.safeParse(email);
  }

  static validateWorkout(workout: unknown) {
    return workoutSchema.nullable().parse(workout);
  }

  static validateWorkoutEmailLiteral(workout: unknown, email: string) {
    return workoutSchemaEmailLiteral(email).nullable().parse(workout);
  }

  static validateWorkouts(workouts: unknown) {
    return workoutSchema.array().parse(workouts);
  }

  static validateWorkoutsEmailLiteral(workouts: unknown, email: string) {
    return workoutSchemaEmailLiteral(email).array().parse(workouts);
  }
}

export default WorkoutValidation;
