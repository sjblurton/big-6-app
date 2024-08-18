import { generateMock } from "@anatine/zod-mock"

import { WorkoutIds, workoutIdsSchema } from "../inputs/inputs"
import { WorkoutsData, workoutsSchema } from "../outputs/workoutsDataSchemas"
import {
    WorkoutData,
    workoutSchema,
} from "../../workouts-id/outputs/workoutDataSchemas"

export function mockExampleWorkouts(
    email = "email@email.co.uk"
): Record<WorkoutIds, WorkoutData[]> {
    const mock = generateMock(workoutsSchema)
    Object.entries(mock).forEach(([workout, entries]) => {
        const parsedWorkoutId = workoutIdsSchema.parse(workout)
        mock[parsedWorkoutId] = entries.map((entry, i) => ({
            ...entry,
            user: email,
            date: 1720888403792,
            workoutId: parsedWorkoutId,
            reps: [20, 15, 10].sort((a, b) => a - b),
            level: 10,
            key: `0ec2272c-51c9-4972-9438-3d2cb49834cc-${i}`,
            comments: "This is a comment",
        }))
    })

    return mock
}

export const hardCodedMockWorkouts = (email: string): WorkoutsData => {
    const exampleWorkout = (workoutId: WorkoutIds): WorkoutData => ({
        key: "0ec2272c-51c9-4972-9438-3d2cb49834cc-0",
        date: 1720888403792,
        reps: [10, 15, 20],
        level: 10,
        comments: "This is a comment",
        user: email,
        workoutId,
    })

    return workoutsSchema.parse({
        "pull-ups": Array(2).fill(exampleWorkout("pull-ups")),
        "push-ups": Array(2).fill(exampleWorkout("push-ups")),
        squats: Array(2).fill(exampleWorkout("squats")),
        handstands: Array(2).fill(exampleWorkout("handstands")),
        bridges: Array(2).fill(exampleWorkout("bridges")),
        "leg-raises": Array(2).fill(exampleWorkout("leg-raises")),
    })
}

export const mockExampleWorkout = (workoutId: WorkoutIds): WorkoutData => {
    const mock = generateMock(workoutSchema)
    return {
        ...mock,
        date: 1720892933102,
        workoutId,
        reps: [10, 15, 20],
        key: "0ec2272c-51c9-4972-9438-3d2cb49834cc-0",
        comments: "This is a comment",
    }
}
