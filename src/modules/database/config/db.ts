export const WORTOUT_IDS = {
  PULL_UPS: "pull-ups",
  PUSH_UPS: "push-ups",
  SQUATS: "squats",
  LEG_RAISES: "leg-raises",
  HANDSTANDS: "handstands",
  BRIDGES: "bridges",
} as const;

export const WORKOUT_ID_LIST = [
  WORTOUT_IDS.PULL_UPS,
  WORTOUT_IDS.PUSH_UPS,
  WORTOUT_IDS.SQUATS,
  WORTOUT_IDS.LEG_RAISES,
  WORTOUT_IDS.HANDSTANDS,
  WORTOUT_IDS.BRIDGES,
] as const;
