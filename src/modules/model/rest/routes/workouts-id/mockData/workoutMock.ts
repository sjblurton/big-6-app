import { generateMock } from "@anatine/zod-mock";
import { faker } from "@faker-js/faker";
import { WorkoutCollections } from "../../workouts/inputs/inputs";
import { WorkoutData, workoutSchema } from "../outputs/workoutDataSchemas";

export const mockExampleWorkouts = ({
  workout,
  entries,
  email = "email@email.com",
}: {
  workout: WorkoutCollections;
  entries: number;
  email?: string;
}): WorkoutData[] => {
  const mock = generateMock(workoutSchema.array(), {
    mapEntriesLength: entries,
  });

  return mock.map((entry) => ({
    ...entry,
    user: email,
    date: {
      seconds: faker.date.recent().getTime(),
      nanoseconds: 0,
    },
    workout,
    reps: [
      faker.number.int({ max: 20, min: 1 }),
      faker.number.int({ max: 20, min: 1 }),
      faker.number.int({ max: 20, min: 1 }),
    ].sort((a, b) => a - b),
    key: faker.string.uuid(),
  }));
};
