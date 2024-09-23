import { bridgesOverview } from "@/modules/model/api/routes/instructions-id/data/bridges"
import { handstandOverview } from "@/modules/model/api/routes/instructions-id/data/handstands"
import { legRaisesOverview } from "@/modules/model/api/routes/instructions-id/data/legRaises"
import { pullUpsOverview } from "@/modules/model/api/routes/instructions-id/data/pull-ups"
import { pushUpOverview } from "@/modules/model/api/routes/instructions-id/data/push-ups"
import { squatOverview } from "@/modules/model/api/routes/instructions-id/data/squats"
import { WORKOUT_IDS, type WorkoutIds } from "../../shared/workout-ids"

export const workoutOverviewDescriptions: {
    [key in WorkoutIds]: {
        title: string
        description: string
    }
} = {
    [WORKOUT_IDS.BRIDGES.key]: {
        title: WORKOUT_IDS.BRIDGES.label,
        description: bridgesOverview,
    },
    [WORKOUT_IDS.HANDSTANDS.key]: {
        title: WORKOUT_IDS.HANDSTANDS.label,
        description: handstandOverview,
    },
    [WORKOUT_IDS.LEG_RAISES.key]: {
        title: WORKOUT_IDS.LEG_RAISES.label,
        description: legRaisesOverview,
    },
    [WORKOUT_IDS.PULL_UPS.key]: {
        title: WORKOUT_IDS.PULL_UPS.label,
        description: pullUpsOverview,
    },
    [WORKOUT_IDS.PUSH_UPS.key]: {
        title: WORKOUT_IDS.PUSH_UPS.label,
        description: pushUpOverview,
    },
    [WORKOUT_IDS.SQUATS.key]: {
        title: WORKOUT_IDS.SQUATS.label,
        description: squatOverview,
    },
}
