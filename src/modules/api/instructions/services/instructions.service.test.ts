import { NextRequest } from "next/server";
import { workoutOverviewSchema } from "@/modules/model/api/routes/instructions-id/outputs/workoutInstructionsSchema";
import InstructionsService from "./instructions.service";
import { ApiBaseError } from "../../error-handler/errors/api.error.base";

jest.mock("../../../model/api/routes/instructions-id/data", () => [
  {
    workoutId: "push-ups",
    level: 1,
    name: "Wall Push Up",
    progressions: { beginner: { sets: 1, reps: 10 } },
    directions: { positive: "", negative: "" },
    video: "https://youtu.be/N5C9NUHZ20U",
  },
]);

describe("InstructionsService", () => {
  const mockRequest = {} as NextRequest;
  const mockParams = { id: "push-ups" as const, level: "1" };

  it("should validate and transform parameters correctly", () => {
    const validatedParams = InstructionsService.validateParams(mockParams);
    expect(validatedParams).toEqual({ id: "push-ups", level: 1 });
  });

  it("should throw validation error for invalid parameters", () => {
    const invalidParams = { id: "invalid-id", level: "11" };
    // @ts-expect-error - testing invalid input
    expect(() => new InstructionsService(mockRequest, invalidParams)).toThrow(
      // @ts-expect-error - testing invalid input
      ApiBaseError,
    );
  });

  it("should filter workout instructions by ID", async () => {
    const service = new InstructionsService(mockRequest, { id: mockParams.id });
    const filteredData = await workoutOverviewSchema.parseAsync(
      await service.parseWorkoutData(),
    );
    expect(filteredData.title).toBe("Push Ups");
  });
});
