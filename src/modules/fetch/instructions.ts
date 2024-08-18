"server only"

import { workoutOverviewSchema } from "../model/api/routes/instructions-id/outputs/workoutInstructionsSchema"
import { WorkoutIds } from "../model/api/routes/workouts/inputs/inputs"

export const fetchInstructions = async (id: WorkoutIds) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/docs/instructions/${id}`
    )
    const data = await workoutOverviewSchema.parseAsync(await res.json())
    return data
}
