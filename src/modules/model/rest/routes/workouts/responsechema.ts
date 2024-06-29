import { WorkoutData, workoutSchema } from "@/modules/model/workouts";
import { extendApi, generateSchema } from "@anatine/zod-openapi";
import { generateMock } from "@anatine/zod-mock";
import { z } from "zod";
import { faker } from "@faker-js/faker";
import { COLLECTION_NAMES } from "@/modules/database/config/db";

const mockExampleFields = (workout: string): WorkoutData[] => {
  const mock = generateMock(workoutSchema.array(), {
    stringMap: {
      user: () => "email@email.co.uk",
    },
    mapEntriesLength: 3,
  });

  return mock.map((entry) => ({
    ...entry,
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

const generateWorkoutResponseSchema = (workoutName: string) =>
  extendApi(
    workoutSchema.array().openapi({
      example: mockExampleFields(workoutName),
    }),
  );

const workoutSchemas = Object.fromEntries(
  Object.values(COLLECTION_NAMES).map((name) => [
    name,
    generateWorkoutResponseSchema(name),
  ]),
);

export const workoutsBody200ResponseSchema = z.object(workoutSchemas);

export const workoutsOpenApiSchema = generateSchema(
  workoutsBody200ResponseSchema,
);
