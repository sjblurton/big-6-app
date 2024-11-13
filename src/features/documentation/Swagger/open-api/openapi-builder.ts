import { OpenApiBuilder } from "openapi3-ts/oas31"

import workoutsPath from "@/features/documentation/Swagger/open-api/routes/workouts/open-api-route-workouts"
import workoutsApiEndpoints from "@/server/endpoints/workouts-api-endpoints"

import workoutTypeIdPath from "./routes/workout-type-id/open-api-route-workout"
import workoutIdPath from "./routes/workouts-id/open-api-route-workout"
import workoutTypesPath from "./routes/workouts-types/open-api-route-workout-type"

function buildOas() {
    const test = OpenApiBuilder.create()
        .addOpenApiVersion("3.1.0")
        .addServer({
            url: workoutsApiEndpoints.getBaseUrl(),
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
        .addPath(workoutsApiEndpoints.getWorkouts(), workoutsPath)
        .addPath(
            workoutsApiEndpoints.getWorkoutByTypeEndpoint(),
            workoutTypeIdPath
        )
        .addPath(workoutsApiEndpoints.getWorkoutEndpoint(), workoutIdPath)
        .addPath(workoutsApiEndpoints.getWorkoutTypes(), workoutTypesPath)

    return test.getSpec()
}

export default buildOas
