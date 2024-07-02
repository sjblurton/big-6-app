import { NextRequest } from "next/server";
import { ZodError } from "zod";
import { WorkoutsService } from "./workouts.service";
import GetWorkoutsData from "../../../modules/database/get/workout/getWorkoutData";
import { emailSchema } from "../../../modules/model/rest/routes/workouts/inputs/inputs";

const passingEmail = "test@pass,com";

describe("WorkoutsService", () => {
  let workoutsService: WorkoutsService;

  let getWorkoutsDataMock: jest.Mock;

  const mockRequest = {
    headers: new Headers({
      "x-user-email": passingEmail,
    }),
    url: "http://example.com?limitBy=5",
  } as NextRequest;

  beforeEach(() => {
    jest.clearAllMocks();
    getWorkoutsDataMock = jest.fn();

    jest
      .spyOn(GetWorkoutsData.prototype, "getWorkoutsData")
      .mockImplementation(getWorkoutsDataMock);

    jest.spyOn(emailSchema, "safeParse").mockImplementation(() => ({
      success: true,
      data: passingEmail,
    }));

    workoutsService = new WorkoutsService(mockRequest);
  });

  it("should be defined", () => {
    expect(workoutsService).toBeDefined();
  });

  it("should call GetWorkoutsData.getWorkoutsData", async () => {
    const mockReturnValue = "Mocked data";
    getWorkoutsDataMock.mockResolvedValue(mockReturnValue);

    const result = await workoutsService.getServiceData();

    expect(getWorkoutsDataMock).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockReturnValue);
  });

  it("should throw an error if no email is provided", () => {
    const mockRequestWithoutEmail = {
      headers: new Headers(),
      url: "http://example.com?limitBy=5",
    } as NextRequest;

    jest.spyOn(emailSchema, "safeParse").mockImplementation(() => ({
      success: false,
      error: new ZodError([
        {
          message: "Invalid email format",
          path: ["x-user-email"],
          code: "invalid_type",
          expected: "string",
          received: "undefined",
        },
      ]),
    }));

    expect(() => new WorkoutsService(mockRequestWithoutEmail)).toThrow(
      "No email provided",
    );
  });

  it("should throw an error if the email is invalid", () => {
    const mockRequestWithInvalidEmail = {
      headers: new Headers({
        "x-user-email": "invalid-email",
      }),
      url: "http://example.com?limitBy=5",
    } as NextRequest;

    jest.spyOn(emailSchema, "safeParse").mockImplementation(() => ({
      success: false,
      error: new ZodError([
        {
          message: "Invalid email format",
          code: "invalid_string",
          path: ["x-user-email"],
          validation: "email",
        },
      ]),
    }));

    expect(() => new WorkoutsService(mockRequestWithInvalidEmail)).toThrow(
      "No email provided",
    );
  });
});
