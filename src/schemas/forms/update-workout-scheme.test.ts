import { type UpdateWorkoutDataInput } from "@/@types/forms/forms-types"

import { updateWorkoutSchema } from "./update-workout-schema"

const mockStepData = {
    name: "Step 1",
    _key: "0e4e1b3b7b6b4b3b8",
    _type: "step",
    negative: "This is a negative",
    positive: "This is a positive",
    video: "https://www.youtube.com/watch?v=0",
    negativeImage: {
        _type: "image",
        asset: {
            _ref: "image-0e4e1b3b7b6b4b3b8",
            _type: "reference",
        },
    },
    positiveImage: {
        _type: "image",
        asset: {
            _ref: "image-0e4e1b3b7b6b4b3b8",
            _type: "reference",
        },
    },
    step: 1,
    progressions: [
        {
            _key: "0e4e1b3b7b6b4b3b8",
            _type: "progression",
            isSeconds: true,
            reps: 10,
            sets: 3,
            stage: "beginner",
        },
        {
            _key: "0e4e1b3b7b6b4b3b8",
            _type: "progression",
            isSeconds: true,
            reps: 10,
            sets: 3,
            stage: "intermediate",
        },
        {
            _key: "0e4e1b3b7b6b4b3b8",
            _type: "progression",
            isSeconds: true,
            reps: 10,
            sets: 3,
            stage: "advanced",
        },
    ],
} satisfies UpdateWorkoutDataInput["metadata"]["step"]

const mockMetadata = {
    name: "Test Metadata",
    image: {
        _type: "image",
        asset: {
            _ref: "image-0e4e1b3b7b6b4b3b8",
            _type: "reference",
        },
    },
    step: mockStepData,
} satisfies UpdateWorkoutDataInput["metadata"]

describe("updateWorkoutSchema", () => {
    it("should validate and transform a valid workout object", () => {
        const validWorkout: UpdateWorkoutDataInput = {
            workout: {
                level: "5",
                date: new Date("10/10-2022").getTime(),
                type: "06d64c6a-4d31-435a-b415-782816c446fd",
                comments: "This is a comment",
                reps: [
                    {
                        value: 10,
                    },

                    {
                        value: 20,
                    },
                ],
            },
            metadata: mockMetadata,
        }

        const result = updateWorkoutSchema.parse(validWorkout)

        expect(result.level).toBe(5)
        expect(result.type).toBe(validWorkout.workout.type)
    })

    it("should handle missing optional fields", () => {
        const validWorkout: UpdateWorkoutDataInput = {
            workout: {
                type: "06d64c6a-4d31-435a-b415-782816c446fd",
                level: "5",
            },
            metadata: mockMetadata,
        }

        const result = updateWorkoutSchema.parse(validWorkout)

        expect(result.level).toBe(5)
        expect(result.type).toBe("06d64c6a-4d31-435a-b415-782816c446fd")
    })

    it("should handle if the optional level isn't being updated", () => {
        const validWorkout: UpdateWorkoutDataInput = {
            workout: {
                type: "06d64c6a-4d31-435a-b415-782816c446fd",
            },
            metadata: mockMetadata,
        }

        const result = updateWorkoutSchema.parse(validWorkout)

        expect(result.type).toBe("06d64c6a-4d31-435a-b415-782816c446fd")
        expect(result.level).toBeUndefined()
    })

    it("should throw an error for invalid level format", () => {
        const invalidWorkout = {
            workout: {
                name: "Test Workout",
                level: "invalid",
            },
            metadata: {
                name: "Test Metadata",
                image: {
                    url: "http://example.com/image.jpg",
                    alt: "Example Image",
                },
                step: {
                    name: "Step 1",
                    description: "First step",
                    duration: 30,
                },
            },
        }

        expect(() => updateWorkoutSchema.parse(invalidWorkout)).toThrow()
    })

    it("should throw an error for missing required metadata fields", () => {
        const invalidWorkout = {
            workout: {
                name: "Test Workout",
                level: "5",
            },
            metadata: {
                name: "Test Metadata",
                image: {
                    url: "http://example.com/image.jpg",
                    alt: "Example Image",
                },
            },
        }

        expect(() => updateWorkoutSchema.parse(invalidWorkout)).toThrow()
    })
})
