import { z } from "zod"

import { WORKOUT_DETAILS } from "@/constants/strings"

export const workoutTypeIdsUnion = z.union([
    z.literal(WORKOUT_DETAILS.pullUp.id),
    z.literal(WORKOUT_DETAILS.bridge.id),
    z.literal(WORKOUT_DETAILS.handstand.id),
    z.literal(WORKOUT_DETAILS.legRaise.id),
    z.literal(WORKOUT_DETAILS.pushUp.id),
    z.literal(WORKOUT_DETAILS.squat.id),
])
