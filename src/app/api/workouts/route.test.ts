import { NextRequest, NextResponse } from "next/server";
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler";
import WorkoutsController from "../../../modules/api/workouts/controller/workouts.controller";
import { GET } from "./route";

const mockRequest = {
  headers: new Headers({
    "x-user-email": "test@example.com",
  }),
  url: "http://example.com",
};

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

describe("GET function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call WorkoutsController.GET and return response", async () => {
    const mockResponse = NextResponse.json({ example: "data" });

    const getSpy = jest.spyOn(WorkoutsController.prototype, "GET");
    getSpy.mockResolvedValue(mockResponse);

    const result = await GET(mockRequest as NextRequest);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith();

    expect(result).toEqual(mockResponse);
  });

  it("should call ErrorHandler.handle if WorkoutsController.GET throws an error", async () => {
    const mockError = new Error("test error");
    const mockErrorResponse = NextResponse.json(
      {
        error: { message: "test error" },
      },
      { status: 500 },
    );

    const getSpy = jest.spyOn(WorkoutsController.prototype, "GET");
    getSpy.mockRejectedValue(mockError);

    mockHandle.mockReturnValue(mockErrorResponse);

    const result = await GET(mockRequest as NextRequest);

    expect(getSpy).toHaveBeenCalledTimes(1);
    expect(getSpy).toHaveBeenCalledWith();

    expect(ErrorHandler).toHaveBeenCalledTimes(1);
    expect(ErrorHandler).toHaveBeenCalledWith(mockError);

    expect(mockHandle).toHaveBeenCalledTimes(1);
    expect(mockHandle).toHaveBeenCalledWith();

    expect(result).toEqual(mockErrorResponse);
  });
});
