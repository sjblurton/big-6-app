export const WORKOUT_IDS = {
  PULL_UPS: "pull-ups",
  PUSH_UPS: "push-ups",
  SQUATS: "squats",
  LEG_RAISES: "leg-raises",
  HANDSTANDS: "handstands",
  BRIDGES: "bridges",
} as const;

export const WORKOUT_ID_LIST = [
  WORKOUT_IDS.PULL_UPS,
  WORKOUT_IDS.PUSH_UPS,
  WORKOUT_IDS.SQUATS,
  WORKOUT_IDS.LEG_RAISES,
  WORKOUT_IDS.HANDSTANDS,
  WORKOUT_IDS.BRIDGES,
] as const;
