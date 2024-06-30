import { NextRequest, NextResponse } from "next/server";
import { WorkoutCollections } from "@/modules/model/rest/routes/workouts/inputs/inputs";
import { mockExampleWorkouts } from "@/modules/model/rest/routes/workouts-id/mockData/workoutMock";
import WorkoutController from "./workout.controller";

jest.mock("next/server", () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
  },
}));

jest.mock("./workout.service", () => ({
  WorkoutService: jest.fn().mockImplementation(() => ({
    getServiceData: jest.fn(),
  })),
}));

describe("WorkoutController", () => {
  let mockRequest: NextRequest;
  let mockWorkoutCollection: WorkoutCollections;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRequest = {
      headers: new Headers({
        "x-user-email": "test@example.com",
      }),
      url: "http://example.com?limitBy=5",
    } as NextRequest;

    mockWorkoutCollection = "pull-ups";
  });

  it("should initialize WorkoutController with request and workoutCollection", () => {
    const controller = new WorkoutController(mockRequest, {
      workout: mockWorkoutCollection,
    });

    expect(controller).toBeInstanceOf(WorkoutController);
    expect(controller.request).toBe(mockRequest);
    expect(controller.workoutCollection).toBe(mockWorkoutCollection);
  });

  it("should return a valid response when calling GET()", async () => {
    const mockResponse = mockExampleWorkouts({
      entries: 5,
      workout: mockWorkoutCollection,
    });

    const getServiceDataSpy = jest.spyOn(
      WorkoutController.prototype,
      "getServiceData",
    );
    getServiceDataSpy.mockResolvedValue(mockResponse);

    const mockedJsonResponse = {
      status: 200,
      body: JSON.stringify(mockResponse),
    };
    (NextResponse.json as jest.Mock).mockReturnValue(mockedJsonResponse);

    const controller = new WorkoutController(mockRequest, {
      workout: mockWorkoutCollection,
    });
    const response = await controller.GET();

    expect(response).toBeDefined();
    expect(response).toHaveProperty("status", 200);
    expect(response.body).toEqual(JSON.stringify(mockResponse));
  });
});
