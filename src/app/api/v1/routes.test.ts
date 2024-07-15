import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler";
import WorkoutsController from "@/modules/api/workouts/controller/workouts.controller";
import WorkoutController from "@/modules/api/workout/controller/workout.controller";
import InstructionsController from "@/modules/api/instructions/instructions.controller";
import { GET as instructionsGET } from "./docs/instructions/[id]/route";
import { GET as workoutsGET } from "./workouts/route";
import { GET as workoutGET } from "./workouts/[id]/route";

const mockRequest = {
  headers: new Headers({
    "x-user-email": "test@example.com",
  }),
  url: "http://example.com",
} as NextRequest;

const mockHandle = jest.fn();
jest.mock("../../../modules/api/error-handler/ErrorHandler", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    handle: mockHandle,
  })),
}));

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({
      json: () => data,
      status: init?.status || 200,
      headers: {},
    })),
  },
}));

describe.each([
  {
    description: "workouts.GET",
    GET: workoutsGET,
    mockArgs: [mockRequest] as const,
    ControllerSpy: jest.spyOn(WorkoutsController.prototype, "GET"),
  },
  {
    description: "workout.GET",
    GET: workoutGET,
    mockArgs: [mockRequest, { params: { id: "pull-ups" } }],
    ControllerSpy: jest.spyOn(WorkoutController.prototype, "GET"),
  },
  {
    description: "instructions.GET",
    GET: instructionsGET,
    mockArgs: [mockRequest, { params: { id: "bridges" } }],
    ControllerSpy: jest.spyOn(InstructionsController.prototype, "GET"),
  },
] as const)(
  "$description GET function",
  ({ GET, ControllerSpy, mockArgs, description }) => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it(`should call ${description} and return response`, async () => {
      const mockResponse = NextResponse.json({ example: "data" });

      ControllerSpy.mockResolvedValue(mockResponse);

      // eslint-disable-next-line
      // @ts-ignore
      const result = await GET(...mockArgs);

      expect(ControllerSpy).toHaveBeenCalledTimes(1);
      expect(result).toEqual(mockResponse);
    });

    it(`should call ErrorHandler.handle if ${description} throws an error`, async () => {
      const mockError = new Error("test error");
      const mockErrorResponse = NextResponse.json(
        {
          error: { message: "test error" },
        },
        { status: 500 },
      );

      ControllerSpy.mockRejectedValue(mockError);

      mockHandle.mockReturnValue(mockErrorResponse);

      // eslint-disable-next-line
      // @ts-ignore
      const result = await GET(...mockArgs);

      expect(ControllerSpy).toHaveBeenCalledTimes(1);
      expect(ErrorHandler).toHaveBeenCalledTimes(1);
      expect(ErrorHandler).toHaveBeenCalledWith(mockError);
      expect(mockHandle).toHaveBeenCalledTimes(1);
      expect(mockHandle).toHaveBeenCalledWith();
      expect(result).toEqual(mockErrorResponse);
    });
  },
);
