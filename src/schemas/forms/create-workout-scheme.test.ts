import { type CreateWorkoutDataInput } from "@/@types/forms/forms-types"
import { WORKOUT_DETAILS } from "@/constants/strings/workout-details"

import { createWorkoutSchema } from "./create-workout-schema"

const mockStepData = {
    current: 1,
    total: 3,
} satisfies CreateWorkoutDataInput["metadata"]["step"]

const mockMetadata = {
    step: mockStepData,
    workoutIds: [
        {
            _id: WORKOUT_DETAILS.bridge.id,
            name: WORKOUT_DETAILS.bridge.value,
            image: {
                _type: "image",
                asset: {
                    _ref: "image-0e4e1b3b7b6b4b3b8",
                    _type: "reference",
                },
                lqip: "data:image/jpeg;base64,...",
            },
        },
    ],
} satisfies CreateWorkoutDataInput["metadata"]

describe("createWorkoutSchema", () => {
    it("should validate and transform a valid workout object", () => {
        const validWorkout: CreateWorkoutDataInput = {
            workout: {
                reps: [{ value: 10 }],
                user: "user@user.com",
                comments: "comments",
                level: "5",
                date: new Date("10/10/2024").getTime(),
                type: WORKOUT_DETAILS.bridge.id,
            },
            metadata: mockMetadata,
        }

        const result = createWorkoutSchema.parse(validWorkout)

        expect(result.level).toBe(5)
        expect(result.type).toBe(WORKOUT_DETAILS.bridge.id)
    })

    it("should throw error is missing optional fields", () => {
        const invalidWorkout = {
            workout: {
                name: "Test Workout",
                level: "5",
            },
            metadata: mockMetadata,
        }

        expect(() => createWorkoutSchema.parse(invalidWorkout)).toThrow()
    })

    it("should throw an error for missing required meta fields", () => {
        const invalidWorkout = {
            workout: {
                name: "Test Workout",
                level: "5",
            },
            meta: {
                step: {
                    current: 1,
                    total: 3,
                },
            },
        }

        expect(() => createWorkoutSchema.parse(invalidWorkout)).toThrow()
    })
})
