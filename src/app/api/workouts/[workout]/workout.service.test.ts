import { NextRequest } from "next/server";

import { mockExampleWorkouts } from "@/modules/model/rest/routes/workouts-id/mockData/workoutMock";
import { WorkoutCollections } from "../../../../modules/model/rest/routes/workouts/inputs/inputs";
import { WorkoutService } from "./workout.service";
import GetWorkoutData from "../../../../modules/database/get/workout/getWorkoutData";

describe("WorkoutService", () => {
  const testEmail = "test@example.com";

  let workoutService: WorkoutService;

  let getWorkoutDataMock: jest.Mock;

  const mockRequest = {
    headers: new Headers({
      "x-user-email": testEmail,
    }),
    url: "http://example.com?limitBy=5",
  } as NextRequest;

  const mockWorkoutCollection: WorkoutCollections = "pull-ups";

  beforeEach(() => {
    jest.clearAllMocks();
    getWorkoutDataMock = jest.fn();

    jest
      .spyOn(GetWorkoutData.prototype, "getWorkoutData")
      .mockImplementation(getWorkoutDataMock);
    workoutService = new WorkoutService(mockRequest, mockWorkoutCollection);
  });

  it("should be defined", () => {
    expect(workoutService).toBeDefined();
  });

  it("should call getServiceData", async () => {
    const mockReturnValue = mockExampleWorkouts({
      entries: 5,
      workout: mockWorkoutCollection,
    });

    getWorkoutDataMock.mockResolvedValue(mockReturnValue);

    const result = await workoutService.getServiceData();

    expect(getWorkoutDataMock).toHaveBeenCalledTimes(1);
    expect(getWorkoutDataMock).toHaveBeenCalledWith(mockWorkoutCollection, 5);
    expect(result).toEqual(mockReturnValue);
  });
});
