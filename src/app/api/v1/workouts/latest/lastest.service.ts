import { mockWorkout } from "@/modules/model/api/routes/workouts-id/mockData/workout-mock"
import { WORKOUT_ID_LIST } from "@/modules/model/api/routes/shared/workout-ids"

class LatestService {
    static async getLatest() {
        const workouts = WORKOUT_ID_LIST.map((workoutId) =>
            mockWorkout({ workoutId })
        ).flat()
        return workouts
    }
}

export default LatestService
