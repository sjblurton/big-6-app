import { NextRequest } from "next/server";

import GetWorkoutData from "@/modules/database/get/workout/getWorkoutData";
import { hardCodedMockWorkout } from "@/modules/model/rest/routes/workouts-id/mockData/workoutMock";
import { WorkoutCollections } from "../../../../modules/model/rest/routes/workouts/inputs/inputs";
import { WorkoutService } from "./workout.service";

describe("WorkoutService", () => {
  const testEmail = "test@example.com";

  let workoutService: WorkoutService;

  const mockRequest = {
    headers: new Headers({
      "x-user-email": testEmail,
    }),
    url: "http://example.com?limitBy=5",
  } as NextRequest;

  const mockWorkoutCollection: WorkoutCollections = "pull-ups";

  beforeEach(() => {
    jest.clearAllMocks();

    workoutService = new WorkoutService(mockRequest, mockWorkoutCollection);
  });

  it("should be defined", () => {
    expect(workoutService).toBeDefined();
  });

  it("should call getServiceData", async () => {
    const mockResult = hardCodedMockWorkout(mockWorkoutCollection, 5);
    const getWorkoutDataMock = jest.spyOn(GetWorkoutData, "getWorkoutData");
    getWorkoutDataMock.mockReturnValue(mockResult);

    const result = await workoutService.getServiceData();

    expect(getWorkoutDataMock).toHaveBeenCalledTimes(1);
    expect(getWorkoutDataMock).toHaveBeenCalledWith(mockWorkoutCollection, 5);
    expect(result).toEqual(mockResult);
  });
});
