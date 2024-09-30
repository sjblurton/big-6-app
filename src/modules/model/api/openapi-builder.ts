import { OpenApiBuilder } from "openapi3-ts/oas31"
import workoutsPath from "./routes/workouts/open-api-route-workouts"
import workoutTypeIdPath from "./routes/workouts-type-id/open-api-route-workout"
import workoutTypesPath from "./routes/workout-types/open-api-route-workout-type"
import workoutIdPath from "./routes/workouts-id/open-api-route-workout"

function buildOas() {
    const test = OpenApiBuilder.create()
        .addOpenApiVersion("3.1.0")
        .addServer({
            url: "http://localhost:3000",
            description: "Local server",
        })
        .addInfo({
            title: "Big 6 Fitness App",
            version: "1.0.0",
        })
        .addLicense({
            name: "MIT",
            url: "https://www.mit.edu/~amini/LICENSE.md",
        })
        .addDescription(
            "Big 6 Fitness App is a workout tracking app that allows users to track their workouts and progress over time."
        )
        .addTag({
            name: "workouts",
            description: "Workout tracking",
        })
        .addPath("/api/v1/workouts", workoutsPath)
        .addPath("/api/v1/workouts/types/{id}", workoutTypeIdPath)
        .addPath("/api/v1/workouts/{id}", workoutIdPath)
        .addPath("/api/v1/workouts/types", workoutTypesPath)

    return test.getSpec()
}

export default buildOas
