import { OpenApiBuilder } from "openapi3-ts/oas31";
import workoutsPath from "./routes/workouts/openApiRouteWorkouts";
import workoutPath from "./routes/workouts-id/openApiRouteWorkout";
import workoutsInstructionsPath from "./routes/instructions/openApiRouteWorkoutsInstructions";

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
      "Big 6 Fitness App is a workout tracking app that allows users to track their workouts and progress over time.",
    )
    .addTag({
      name: "workouts",
      description: "Workout tracking",
    })
    .addPath("/api/v1/workouts", workoutsPath)
    .addPath("/api/v1/workouts/{id}", workoutPath)
    .addPath("/api/v1/docs/instructions/{id}", workoutsInstructionsPath);

  return test.getSpec();
}

export default buildOas;
