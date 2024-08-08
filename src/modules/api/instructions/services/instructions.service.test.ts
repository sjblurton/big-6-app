import { NextRequest } from "next/server";
import InstructionsService, { InstructionParams } from "./instructions.service";
import { ApiBaseError } from "../../error-handler/errors/api.error.base";

describe("InstructionsService", () => {
  const mockRequest = {} as NextRequest;
  const mockParams: InstructionParams = {
    name: "push-ups" as const,
    level: "level-1",
  };

  it("should validate and transform parameters correctly", () => {
    const validatedParams = InstructionsService.validateParams(mockParams);
    expect(validatedParams).toEqual({ name: "push-ups", level: "level-1" });
  });

  it("should throw validation error for invalid parameters", () => {
    const invalidParams = { id: "invalid-id", level: "11" };
    // @ts-expect-error - testing invalid input
    expect(() => new InstructionsService(mockRequest, invalidParams)).toThrow(
      // @ts-expect-error - testing invalid input
      ApiBaseError,
    );
  });
});
