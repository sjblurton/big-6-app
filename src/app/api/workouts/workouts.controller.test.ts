import { NextRequest } from "next/server";
import { mockExampleWorkouts } from "@/modules/model/rest/routes/workouts/mockData/workoutsMock";
import WorkoutsController from "./workouts.controller";

jest.mock("next/server", () => ({
  NextRequest: jest.fn(),
}));

jest.mock("./workouts.service", () => {
  const mockGetServiceData = jest.fn();
  return {
    WorkoutsService: jest.fn().mockImplementation(() => ({
      getServiceData: mockGetServiceData,
    })),
    mockGetServiceData,
  };
});

describe("WorkoutsController", () => {
  let mockRequest: NextRequest;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRequest = {
      headers: new Headers({
        "x-user-email": "test@example.com",
      }),
      url: "http://example.com",
    } as NextRequest;
  });

  it("should initialize WorkoutsController with request and WorkoutsService", () => {
    const controller = new WorkoutsController(mockRequest);

    expect(controller).toBeInstanceOf(WorkoutsController);
    expect(controller.request).toBe(mockRequest);
  });

  it("should call WorkoutsService.getServiceData() when calling getServiceData()", async () => {
    const mockResponse = mockExampleWorkouts();

    const { mockGetServiceData } = jest.requireMock("./workouts.service");

    mockGetServiceData.mockResolvedValue(mockResponse);

    const controller = new WorkoutsController(mockRequest);
    const result = await controller.getServiceData();

    expect(mockGetServiceData).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockResponse);
  });
});
