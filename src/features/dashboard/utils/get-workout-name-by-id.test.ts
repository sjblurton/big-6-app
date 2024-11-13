import { getWorkoutNameById } from "./get-workout-name-by-id"

jest.mock("@/constants", () => ({
    WORKOUT_DETAILS_ARRAY: [
        { id: "1", value: "Push Up" },
        { id: "2", value: "Pull Up" },
        { id: "3", value: "Squat" },
    ],
}))

describe("getWorkoutNameById", () => {
    it("should return the correct workout name for a valid ID", () => {
        const id = "1"
        // @ts-expect-error - Testing the function mocked data
        const workoutName = getWorkoutNameById(id)
        expect(workoutName).toBe("Push Up")
    })

    it("should throw an error if the workout ID is not found", () => {
        const id = "999"
        // @ts-expect-error - Testing the function mocked data
        expect(() => getWorkoutNameById(id)).toThrow(
            `No exercise found for id: ${id}`
        )
    })
})
