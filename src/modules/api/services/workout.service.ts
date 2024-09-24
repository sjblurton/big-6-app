import { type NextRequest } from "next/server"
import {
    type WorkoutIds,
    workoutIdsSchema,
} from "@/modules/model/api/routes/workouts/inputs/inputs"
import { limitBySchema } from "@/modules/model/api/routes/workouts-id/inputs/query-schema"
import GetWorkoutData from "@/modules/database/workouts/read/get-workout-data"
import { ApiBadRequestError } from "../error-handler/errors/api.error.bad-request"

export class WorkoutService {
    private workoutId: WorkoutIds

    private request: NextRequest

    constructor(request: NextRequest, workoutId: WorkoutIds) {
        this.request = request
        this.workoutId = workoutId
    }

    getServiceData() {
        return GetWorkoutData.getWorkoutData(
            this.validateUrlParams(),
            this.validateSearchParams()
        )
    }

    private validateUrlParams() {
        const safeWorkout = workoutIdsSchema.safeParse(this.workoutId)
        if (!safeWorkout.success) {
            throw new ApiBadRequestError({
                description: "Invalid workout",
            })
        }
        return safeWorkout.data
    }

    private validateSearchParams() {
        const { searchParams } = new URL(this.request.url)
        const value = searchParams.get("limitBy")
        const limitBy = value ? parseInt(value, 10) : undefined

        const safeLimitBy = limitBySchema.safeParse(limitBy)
        if (!safeLimitBy.success) {
            throw new ApiBadRequestError({
                description:
                    "Invalid limitBy parameter: must be a positive integer",
            })
        }
        return safeLimitBy.data
    }
}
