import {NextRequest, NextResponse} from "next/server";
import {WorkoutIds} from "@/modules/model/api/routes/workouts/inputs/inputs";
import {mockExampleWorkout} from "@/modules/model/api/routes/workouts-id/mockData/workoutMock";
import WorkoutController from "./workout.controller";

jest.mock("next/server", () => ({
  NextRequest: jest.fn(),
  NextResponse: {
    json: jest.fn(),
  },
}));

jest.mock("../services/workout.service", () => ({
  WorkoutService: jest.fn().mockImplementation(() => ({
    getServiceData: jest.fn(),
  })),
}));

describe("WorkoutController", () => {
  let mockRequest: NextRequest;

  beforeEach(() => {
    jest.clearAllMocks();

    mockRequest = {
      headers: new Headers({
        "x-user-email": "test@example.com",
      }),
      url: "http://example.com?limitBy=5",
    } as NextRequest;
  });

  const workoutIds: WorkoutIds[] = [
    "pull-ups",
    "push-ups",
    "squats",
    "leg-raises",
    "handstands",
    "bridges",
  ];

  workoutIds.forEach((workoutCollection) => {
    it(`should return a valid response for ${workoutCollection} when calling GET()`, async () => {
      const mockResponse = mockExampleWorkout({
        entries: 5,
        workoutId: workoutCollection,
      });

      const getServiceDataSpy = jest.spyOn(
        WorkoutController.prototype,
        "getServiceData"
      );
      getServiceDataSpy.mockResolvedValue(mockResponse);

      const mockedJsonResponse = {
        status: 200,
        body: JSON.stringify(mockResponse),
      };
      (NextResponse.json as jest.Mock).mockReturnValue(mockedJsonResponse);

      const controller = new WorkoutController(mockRequest, {
        id: workoutCollection,
      });
      const response = await controller.GET();

      expect(response).toBeDefined();
      expect(response).toHaveProperty("status", 200);
      expect(response.body).toEqual(JSON.stringify(mockResponse));
    });
  });
});
