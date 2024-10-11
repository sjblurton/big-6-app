import { TIME_MILLISECONDS } from "@/modules/time/constants"

import {
    type WorkoutData,
    workoutTypes,
} from "../../../../../../modules/model/workout/workout-schemas"

const { pullUp, bridge, handstand, legRaise, pushUp, squat } = workoutTypes

const December312022 = 1672531199000

export const mockPullUpWorkoutData: WorkoutData[] = [
    {
        id: "workout1",
        date: December312022,
        reps: [10, 12, 15],
        level: 5,
        type: pullUp.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout2",
        date: December312022 - Number(TIME_MILLISECONDS.ONE_WEEK),
        reps: [8, 10, 12],
        level: 5,
        type: pullUp.id,
        comments: "Struggled with the last set.",
        user: "user1@example.com",
    },
    {
        id: "workout3",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 2,
        reps: [20, 25, 30],
        level: 5,
        type: pullUp.id,
        comments: "Feeling stronger.",
        user: "user1@example.com",
    },
    {
        id: "workout4",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 3,
        reps: [5, 7, 10],
        level: 5,
        type: pullUp.id,
        comments: "Struggled with the first set.",
        user: "user1@example.com",
    },
    {
        id: "workout5",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 4,
        reps: [15, 18, 20],
        level: 5,
        type: pullUp.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout6",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 5,
        reps: [12, 14, 16],
        level: 5,
        type: pullUp.id,
        comments: "Grip was slipping.",
        user: "user1@example.com",
    },
]

export const mockLatestWorkoutData: WorkoutData[] = [
    {
        id: "workout1",
        date: 1672531199000,
        reps: [10, 12, 15],
        level: 5,
        type: pullUp.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout2",
        date: 1672617599000,
        reps: [2, 1],
        level: 5,
        type: handstand.id,
        comments: "Struggled with the last set.",
        user: "user1@example.com",
    },
    {
        id: "workout3",
        date: 1672703999000,
        reps: [20, 25, 30],
        level: 5,
        type: pushUp.id,
        comments: "Feeling stronger",
        user: "user1@example.com",
    },
    {
        id: "workout4",
        date: 1672790399000,
        reps: [5, 7, 10],
        level: 5,
        type: squat.id,
        comments: "Struggled with the first set.",
        user: "user1@example.com",
    },
    {
        id: "workout5",
        date: 1672876799000,
        reps: [15, 18, 20],
        level: 5,
        type: bridge.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout6",
        date: 1672963199000,
        reps: [12, 14, 16],
        level: 5,
        type: legRaise.id,
        comments: "Grip was slipping.",
        user: "user1@example.com",
    },
]
