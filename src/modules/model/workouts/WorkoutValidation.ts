import {
  API_ERROR_NAMES,
  ApiError,
  HTTP_ERROR_CODES,
} from "@/modules/rest/error-handler/ApiErrors";
import { WORKOUT_COLLECTIONS } from "@/modules/database/config/db";
import {
  emailSchema,
  workoutCollectionsSchema,
  workoutSchemaEmailLiteral,
} from "./workoutSchemas";

class WorkoutValidation {
  static validateWorkoutCollection(workout: unknown) {
    const safe = workoutCollectionsSchema.safeParse(workout);

    if (!safe.success) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.BAD_REQUEST,
        httpCode: HTTP_ERROR_CODES.BAD_REQUEST,
        description: `Workout collection is not valid try one of: ${WORKOUT_COLLECTIONS.join(", ")}`,
        isOperational: true,
      });
    }
    return safe.data;
  }

  static validateEmail(email: unknown) {
    const safe = emailSchema.safeParse(email);

    if (!safe.success) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.FORBIDDEN,
        httpCode: HTTP_ERROR_CODES.FORBIDDEN,
        description: "Cannot validate email",
        isOperational: false,
        cause: safe.error,
      });
    }
  }

  static validateWorkoutEmailLiteral(workout: unknown, email: string) {
    const safe = workoutSchemaEmailLiteral(email).nullable().safeParse(workout);
    if (!safe.success) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.INTERNAL_SERVER_ERROR,
        httpCode: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
        description: "Database data is not valid",
        isOperational: false,
        cause: safe.error,
      });
    }
    return safe.data;
  }
}

export default WorkoutValidation;
