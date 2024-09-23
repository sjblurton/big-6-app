"server only"

import { headers } from "next/headers"
import { workoutsSchema } from "../model/api/routes/workouts/outputs/workouts-data-schemas"
import { workoutSchema } from "../model/api/routes/workouts-id/outputs/workout-data-schemas"
import { type WorkoutIds } from "../model/api/routes/shared/workout-ids"
import ParseInstructions from "../ParseInstructions/ParseInstructions"

export const fetchWorkouts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/workouts`,
        {
            headers: new Headers(headers()),
        }
    )
    const data = await workoutsSchema.parseAsync(await res.json())
    return data
}

export const fetchLatestWorkouts = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/workouts/latest`,
        {
            headers: new Headers(headers()),
        }
    )
    const data = await workoutSchema
        .array()
        .parseAsync((await res.json()) ?? [])
    return data
}

export const fetchWorkout = async (workout: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/workouts/${workout}`,
        {
            headers: new Headers(headers()),
        }
    )
    const data = await workoutSchema.array().parseAsync(await res.json())
    return data
}

export const fetchWorkoutTimeLine = async (workoutId: WorkoutIds) => {
    const { levelNames } = new ParseInstructions({
        name: workoutId,
    }).parseWorkoutOverview()

    const workoutData = await fetchWorkout(workoutId)
    return workoutData.map((workout) => ({
        key: workout.key,
        time: workout.date,
        workoutId: workout.workoutId,
        title: levelNames[workout.level - 1],
        level: workout.level,
        description: `Total reps: ${workout.reps.reduce(
            (acc, curr) => acc + curr,
            0
        )}`,
    }))
}

export async function fetchLatestWorkoutHighestLevel(workoutId: WorkoutIds) {
    const workoutData = await fetchWorkout(workoutId)

    const highestLevel = workoutData.reduce((acc, { level }) => {
        if (level > acc) {
            return level
        }
        return acc
    }, 0)

    return workoutData.filter((workout) => workout.level === highestLevel)
}
