"server only"

import { headers } from "next/headers"

import { workoutsSchema } from "../model/api/routes/workouts/outputs/workoutsDataSchemas"
import { workoutSchema } from "../model/api/routes/workouts-id/outputs/workoutDataSchemas"

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
