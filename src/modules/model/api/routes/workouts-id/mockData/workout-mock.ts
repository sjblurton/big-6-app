import { generateMock } from "@anatine/zod-mock"
import { faker } from "@faker-js/faker"
import { TIME_MILLISECONDS } from "@/modules/time/constants"
import { type WorkoutIds } from "../../workouts/inputs/inputs"
import {
    type WorkoutData,
    workoutSchema,
} from "../outputs/workout-data-schemas"

export const mockWorkout = ({
    workoutId,
    email = "email@email.com",
}: {
    workoutId: WorkoutIds
    email?: string
}) => {
    const mock = generateMock(workoutSchema)
    const reps = new Array(faker.number.int({ min: 1, max: 3 }))
        .fill(0)
        .map(() => faker.number.int({ min: 1, max: 20 }))
        .sort((a, b) => a - b)

    return {
        ...mock,
        user: email,
        date: faker.date.past().getTime(),
        workoutId,
        reps,
        level: faker.number.int({ min: 1, max: 8 }),
        key: faker.string.uuid(),
        comments: faker.lorem.sentence(),
    }
}

export const mockExampleWorkouts = ({
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
    const mockData = []

    for (let i = 0; i < numberOf; i += 1) {
        const lowReps = faker.number.int({ min: 1, max: 5 })
        const averageRepRange = faker.number.int({ min: 6, max: 15 })
        const highRepRange = faker.number.int({ min: 15, max: 30 })

        const reps: number[] = [lowReps, averageRepRange, highRepRange]

        const mockEntry = {
            key: faker.string.uuid(),
            date: new Date().getTime() - TIME_MILLISECONDS.ONE_WEEK * (i + 1),
            reps,
            level: 5,
            workoutId,
            comments: faker.lorem.sentence(),
            user: faker.internet.email(),
        }

        mockData.push(mockEntry)
    }

    return mockData
}
