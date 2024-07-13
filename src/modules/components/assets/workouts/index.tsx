import { WorkoutCollections } from "@/modules/model/api/routes/workouts/inputs/inputs";
import { ReactNode } from "react";
import Bridge from "./Bridge";
import Handstand from "./Handstand";
import LegRaise from "./LegRaise";
import PullUp from "./PullUp";
import PushUp from "./PushUp";
import Squat from "./Squat";
import Rest from "./Rest";

export const workoutSvgs: Record<
  WorkoutCollections | "rest",
  { component: () => ReactNode; title: string }
> = {
  bridges: { component: Bridge, title: "Bridges" },
  handstands: { component: Handstand, title: "Handstands" },
  "leg-raises": { component: LegRaise, title: "Leg Raises" },
  "pull-ups": { component: PullUp, title: "Pull Ups" },
  "push-ups": { component: PushUp, title: "Push Ups" },
  squats: { component: Squat, title: "Squats" },
  rest: { component: Rest, title: "Rest" },
};
