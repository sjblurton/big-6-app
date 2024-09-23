import { hardCodedMockWorkouts } from "@/modules/model/api/routes/workouts/mockData/workouts-mock"
import GetWorkoutData from "./get-workout-data"

describe("GetWorkoutData", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it("should return parsed workouts data when calling getWorkoutsData", () => {
        const email = "email@email.co.uk"
        const getWorkoutData = new GetWorkoutData(email)

        const result = getWorkoutData.getWorkoutsData()

        expect(result).toEqual(hardCodedMockWorkouts(email))
    })
})
