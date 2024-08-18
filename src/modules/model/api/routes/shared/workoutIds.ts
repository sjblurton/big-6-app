export const WORKOUT_IDS = {
    PULL_UPS: { key: "pull-ups", label: "Pull Ups" },
    PUSH_UPS: { key: "push-ups", label: "Push Ups" },
    SQUATS: { key: "squats", label: "Squats" },
    LEG_RAISES: { key: "leg-raises", label: "Leg Raises" },
    HANDSTANDS: { key: "handstands", label: "Handstands" },
    BRIDGES: { key: "bridges", label: "Bridges" },
} as const

export const WORKOUT_ID_LIST = [
    WORKOUT_IDS.PULL_UPS.key,
    WORKOUT_IDS.PUSH_UPS.key,
    WORKOUT_IDS.SQUATS.key,
    WORKOUT_IDS.LEG_RAISES.key,
    WORKOUT_IDS.HANDSTANDS.key,
    WORKOUT_IDS.BRIDGES.key,
] as const

export type WorkoutIds = (typeof WORKOUT_ID_LIST)[number]

export const WORKOUT_LIST = [
    WORKOUT_IDS.PULL_UPS,
    WORKOUT_IDS.PUSH_UPS,
    WORKOUT_IDS.SQUATS,
    WORKOUT_IDS.LEG_RAISES,
    WORKOUT_IDS.HANDSTANDS,
    WORKOUT_IDS.BRIDGES,
] as const
