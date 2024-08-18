import { generateMock } from "@anatine/zod-mock"
import { WorkoutIds } from "../../workouts/inputs/inputs"
import { WorkoutData, workoutSchema } from "../outputs/workoutDataSchemas"

export const mockExampleWorkout = ({
    workoutId,
    entries,
    email = "email@email.com",
}: {
    workoutId: WorkoutIds
    entries: number
    email?: string
}): WorkoutData[] => {
    const mock = generateMock(workoutSchema.array(), {
        mapEntriesLength: entries,
    })

    return mock.map((entry, i) => ({
        ...entry,
        user: email,
        date: 1719673447005,
        workoutId,
        reps: [20, 15, 10].sort((a, b) => a - b),
        level: 10,
        key: `0ec2272c-51c9-4972-9438-3d2cb49834cc-${i}`,
        comments: "This is a comment",
    }))
}

export const hardCodedMockWorkout = (
    workoutId: WorkoutIds,
    numberOf: number
): WorkoutData[] => {
    const exampleWorkout = {
        key: "0ec2272c-51c9-4972-9438-3d2cb49834cc-0",
        date: 1719673447005,
        reps: [10, 15, 20],
        level: 10,
        workoutId,
        comments: "This is a comment",
        user: "test@example.com",
    }

    return Array(numberOf).fill(exampleWorkout)
}
