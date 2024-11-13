import { type WorkoutTypeIds } from "@/@types/workouts/workout-types"
import { WORKOUT_DETAILS_ARRAY } from "@/constants"

export function getWorkoutNameById(id: WorkoutTypeIds): string {
    const value = WORKOUT_DETAILS_ARRAY.find((exercise) => exercise.id === id)
    if (!value) {
        throw new Error(`No exercise found for id: ${id}`)
    }
    return value.value
}
