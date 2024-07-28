import bridges, { bridgesOverview } from "./bridges";
import handstands, { handstandOverview } from "./handstands";
import pullUps, { pullUpsOverview } from "./pullUps";
import pushUps, { pushUpOverview } from "./pushUps";
import legRaises, { legRaisesOverview } from "./legRaises";
import squats, { squatOverview } from "./squats";
import { WORKOUT_IDS, WORKOUT_ID_LIST } from "../../shared/workoutIds";

export default [
  ...bridges,
  ...handstands,
  ...pullUps,
  ...pushUps,
  ...legRaises,
  ...squats,
];

type WorkoutIds = (typeof WORKOUT_ID_LIST)[number];

export const workoutOverviewDescriptions: {
  [key in WorkoutIds]: {
    title: string;
    description: string;
  };
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
};
