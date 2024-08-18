import { workoutsSchema } from "@/modules/model/api/routes/workouts/outputs/workoutsDataSchemas"
import { workoutSchema } from "@/modules/model/api/routes/workouts-id/outputs/workoutDataSchemas"
import { hardCodedMockWorkout } from "@/modules/model/api/routes/workouts-id/mockData/workoutMock"
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs"

import { hardCodedMockWorkouts } from "@/modules/model/api/routes/workouts/mockData/workoutsMock"

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
