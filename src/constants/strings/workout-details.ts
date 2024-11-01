const pullUpId = "06d64c6a-4d31-435a-b415-782816c446fd"
const bridgeId = "316b2f69-1a2f-4611-8891-bfa754e1b2c5"
const handstandId = "3c93b151-0646-409f-bd81-1bd39944cad8"
const legRaiseId = "8d67a779-ba3b-4643-a7f8-4ea021cc6615"
const pushUpId = "8e21abc2-3d10-43bf-8635-a8341cebba9e"
const squatId = "d0ed1640-1b24-432a-80ab-03ded1eaa1aa"

export const WORKOUT_DETAILS = {
    pushUp: { title: "Push Up", value: "push up", id: pushUpId },
    pullUp: { title: "Pull Up", value: "pull up", id: pullUpId },
    squat: { title: "Squat", value: "squat", id: squatId },
    legRaise: { title: "Leg Raise", value: "leg raise", id: legRaiseId },
    handstand: { title: "Handstand", value: "handstand", id: handstandId },
    bridge: { title: "Bridge", value: "bridge", id: bridgeId },
} as const

export const WORKOUT_DETAILS_ARRAY = Object.values(WORKOUT_DETAILS)

export type WorkoutDetailsArray =
    (typeof WORKOUT_DETAILS)[keyof typeof WORKOUT_DETAILS]

export type WorkoutDetailsKey = keyof typeof WORKOUT_DETAILS
