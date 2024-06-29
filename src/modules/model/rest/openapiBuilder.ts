import { OpenApiBuilder } from "openapi3-ts/oas31";
import workoutsPath from "./routes/workouts/workouts";
import workoutPath from "./routes/workouts/workout/workout";

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
    .addPath("/api/workouts", workoutsPath)
    .addPath("/api/workouts/{workoutCollection}", workoutPath);

  return test.getSpec();
}

export default buildOas;
