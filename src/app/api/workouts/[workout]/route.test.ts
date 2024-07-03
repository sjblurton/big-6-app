import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/modules/rest/error-handler/ErrorHandler";
import WorkoutController from "@/modules/api/workout/controller/workout.controller";
import { GET } from "./route";

const mockRequest = {
  headers: new Headers({
    "x-user-email": "test@example.com",
  }),
  url: "http://example.com",
};

jest.mock("../../../../modules/rest/error-handler/ErrorHandler", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    handle: jest.fn(),
  })),
}));

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("GET function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call WorkoutsController.GET and return response", async () => {
    const mockResponse = NextResponse.json({ example: "data" });

    const getSpy = jest.spyOn(WorkoutController.prototype, "GET");
    getSpy.mockResolvedValue(mockResponse);

    const result = await GET(mockRequest as NextRequest, {
      params: { workout: "pull-ups" },
    });

    expect(getSpy).toHaveBeenCalledTimes(1);

    expect(result).toBe(mockResponse);
  });

  it("should call ErrorHandler.handle if WorkoutsController.GET throws an error", async () => {
    const mockError = new Error("test error");
    const mockResponse = NextResponse.json({ example: "data" });

    const getSpy = jest.spyOn(WorkoutController.prototype, "GET");
    getSpy.mockRejectedValue(mockError);

    const result = await GET(mockRequest as NextRequest, {
      params: { workout: "pull-ups" },
    });

    expect(getSpy).toHaveBeenCalledTimes(1);

    expect(ErrorHandler).toHaveBeenCalledTimes(1);
    expect(ErrorHandler).toHaveBeenCalledWith(mockError);

    expect(result).toBe(mockResponse);
  });
});
