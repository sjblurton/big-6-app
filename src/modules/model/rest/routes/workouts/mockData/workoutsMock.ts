import { generateMock } from "@anatine/zod-mock";
import { faker } from "@faker-js/faker";
import { WorkoutCollections, workoutCollectionsSchema } from "../inputs/inputs";
import { workoutsSchema } from "../outputs/workoutsDataSchemas";
import { WorkoutData } from "../../workouts-id/outputs/workoutDataSchemas";

export function mockExampleWorkouts(
  email = "email@email.co.uk",
): Record<WorkoutCollections, WorkoutData[]> {
  const mock = generateMock(workoutsSchema);
  Object.entries(mock).forEach(([workout, entries]) => {
    const parsedWorkout = workoutCollectionsSchema.parse(workout);
    mock[parsedWorkout] = entries.map((entry) => ({
      ...entry,
      user: email,
      date: {
        seconds: faker.date.recent().getTime(),
        nanoseconds: 0,
      },
      reps: [
        faker.number.int({ max: 20, min: 1 }),
        faker.number.int({ max: 20, min: 1 }),
        faker.number.int({ max: 20, min: 1 }),
      ].sort((a, b) => a - b),
      key: faker.string.uuid(),
    }));
  });

  return mock;
}
