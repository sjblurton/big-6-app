import { OpenApiBuilder } from "openapi3-ts/oas31"

import workoutsApiModule from "@/modules/api/address/workouts-api"

import workoutIdPath from "./v1/workouts/[id]/open-api/open-api-route-workout"
import workoutsPath from "./v1/workouts/open-api/open-api-route-workouts"
import workoutTypeIdPath from "./v1/workouts/types/[id]/open-api/open-api-route-workout"
import workoutTypesPath from "./v1/workouts/types/open-api/open-api-route-workout-type"

function buildOas() {
    const test = OpenApiBuilder.create()
        .addOpenApiVersion("3.1.0")
        .addServer({
            url: workoutsApiModule.getBaseUrl(),
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
        .addPath(workoutsApiModule.allWorkouts(), workoutsPath)
        .addPath(
            workoutsApiModule.getWorkoutByTypeEndpoint(),
            workoutTypeIdPath
        )
        .addPath(workoutsApiModule.getWorkoutEndpoint(), workoutIdPath)
        .addPath(workoutsApiModule.workoutTypes(), workoutTypesPath)

    return test.getSpec()
}

export default buildOas
