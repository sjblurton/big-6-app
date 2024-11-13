import { type WorkoutData } from "@/@types/workouts/workout-types"
import { TIME_MILLISECONDS } from "@/constants/numbers/dates"
import { WORKOUT_DETAILS } from "@/constants/strings/workout-details"

const { pullUp, bridge, handstand, legRaise, pushUp, squat } = WORKOUT_DETAILS

const December312022 = 1_672_531_199_000

export const mockPullUpWorkoutData: WorkoutData[] = [
    {
        id: "workout1",
        date: December312022,
        reps: [{ value: 10 }, { value: 12 }, { value: 15 }],
        level: 5,
        type: pullUp.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout2",
        date: December312022 - Number(TIME_MILLISECONDS.ONE_WEEK),
        reps: [{ value: 8 }, { value: 10 }, { value: 12 }],
        level: 5,
        type: pullUp.id,
        comments: "Struggled with the last set.",
        user: "user1@example.com",
    },
    {
        id: "workout3",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 2,
        reps: [{ value: 20 }, { value: 25 }, { value: 30 }],
        level: 5,
        type: pullUp.id,
        comments: "Feeling stronger.",
        user: "user1@example.com",
    },
    {
        id: "workout4",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 3,
        reps: [{ value: 5 }, { value: 7 }, { value: 10 }],
        level: 5,
        type: pullUp.id,
        comments: "Struggled with the first set.",
        user: "user1@example.com",
    },
    {
        id: "workout5",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 4,
        reps: [{ value: 15 }, { value: 18 }, { value: 20 }],
        level: 5,
        type: pullUp.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout6",
        date: December312022 - TIME_MILLISECONDS.ONE_WEEK * 5,
        reps: [{ value: 12 }, { value: 14 }, { value: 16 }],
        level: 5,
        type: pullUp.id,
        comments: "Grip was slipping.",
        user: "user1@example.com",
    },
]

export const mockLatestWorkoutData: WorkoutData[] = [
    {
        id: "workout1",
        date: 1_672_531_199_000,
        reps: [{ value: 10 }, { value: 12 }, { value: 15 }],
        level: 5,
        type: pullUp.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout2",
        date: 1_672_617_599_000,
        reps: [{ value: 2 }, { value: 1 }],
        level: 5,
        type: handstand.id,
        comments: "Struggled with the last set.",
        user: "user1@example.com",
    },
    {
        id: "workout3",
        date: 1_672_703_999_000,
        reps: [{ value: 20 }, { value: 25 }, { value: 30 }],
        level: 5,
        type: pushUp.id,
        comments: "Feeling stronger",
        user: "user1@example.com",
    },
    {
        id: "workout4",
        date: 1_672_790_399_000,
        reps: [{ value: 5 }, { value: 7 }, { value: 10 }],
        level: 5,
        type: squat.id,
        comments: "Struggled with the first set.",
        user: "user1@example.com",
    },
    {
        id: "workout5",
        date: 1_672_876_799_000,
        reps: [{ value: 15 }, { value: 18 }, { value: 20 }],
        level: 5,
        type: bridge.id,
        comments: "Felt strong today!",
        user: "user1@example.com",
    },
    {
        id: "workout6",
        date: 1_672_963_199_000,
        reps: [{ value: 12 }, { value: 14 }, { value: 16 }],
        level: 5,
        type: legRaise.id,
        comments: "Grip was slipping.",
        user: "user1@example.com",
    },
]
