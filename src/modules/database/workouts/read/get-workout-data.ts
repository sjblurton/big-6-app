import { workoutsSchema } from "@/modules/model/api/routes/workouts/outputs/workouts-data-schemas"
import { workoutSchema } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"
import { hardCodedMockWorkout } from "@/modules/model/api/routes/workouts-id/mockData/workout-mock"
import { type WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs"
import { hardCodedMockWorkouts } from "@/modules/model/api/routes/workouts/mockData/workouts-mock"

class GetWorkoutData {
    email: string

    constructor(email: string) {
        this.email = email
    }

    static getWorkoutData(workoutId: WorkoutIds, limitBy: number) {
        return workoutSchema
            .array()
            .parse(hardCodedMockWorkout(workoutId, limitBy))
    }

    getWorkoutsData() {
        return workoutsSchema.parse(hardCodedMockWorkouts(this.email))
    }
}

export default GetWorkoutData
