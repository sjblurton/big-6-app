import { generateMock } from "@anatine/zod-mock";
import { WorkoutCollections } from "../../workouts/inputs/inputs";
import { WorkoutData, workoutSchema } from "../outputs/workoutDataSchemas";

export const mockExampleWorkout = ({
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

  return mock.map((entry, i) => ({
    ...entry,
    user: email,
    date: {
      seconds: 1719673447005,
      nanoseconds: 0,
    },
    workout,
    reps: [20, 15, 10].sort((a, b) => a - b),
    level: 10,
    key: `0ec2272c-51c9-4972-9438-3d2cb49834cc-${i}`,
    comments: "This is a comment",
  }));
};

export const hardCodedMockWorkout = (
  workout: WorkoutCollections,
  numberOf: number,
): WorkoutData[] => {
  const exampleWorkout = {
    key: "0ec2272c-51c9-4972-9438-3d2cb49834cc-0",
    date: { seconds: 1719673447005, nanoseconds: 0 },
    reps: [10, 15, 20],
    level: 10,
    workout,
    comments: "This is a comment",
    user: "test@example.com",
  };

  return Array(numberOf).fill(exampleWorkout);
};
