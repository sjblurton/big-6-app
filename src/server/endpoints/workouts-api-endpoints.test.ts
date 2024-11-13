import workoutsApiEndpoints from "./workouts-api-endpoints"

describe("WorkoutsApi", () => {
    it("should return the correct workouts endpoint", () => {
        const endpoint = workoutsApiEndpoints.getWorkouts()
        expect(endpoint).toBe("/api/v1/workouts")
    })

    it("should return the correct workout by ID endpoint", () => {
        const id = "123"
        const endpoint = workoutsApiEndpoints.getWorkoutById(id)
        expect(endpoint).toBe(`/api/v1/workouts/${id}`)
    })

    it("should return the correct workout by type endpoint", () => {
        const id = "type123"
        const endpoint = workoutsApiEndpoints.getWorkoutByType(id)
        expect(endpoint).toBe(`/api/v1/workouts/types/${id}`)
    })

    it("should return the correct workout types endpoint", () => {
        const endpoint = workoutsApiEndpoints.getWorkoutTypes()
        expect(endpoint).toBe("/api/v1/workouts/types")
    })

    it("should return the correct workout endpoint template", () => {
        const endpoint = workoutsApiEndpoints.getWorkoutEndpoint()
        expect(endpoint).toBe("/api/v1/workouts/{id}")
    })

    it("should return the correct workout by type endpoint template", () => {
        const endpoint = workoutsApiEndpoints.getWorkoutByTypeEndpoint()
        expect(endpoint).toBe("/api/v1/workouts/types/{id}")
    })
})
