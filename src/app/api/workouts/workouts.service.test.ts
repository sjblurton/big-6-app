import { NextRequest } from "next/server";
import { WorkoutsService } from "./workouts.service";
import GetWorkoutsData from "../../../modules/database/get/workout/getWorkoutData";

describe("WorkoutsService", () => {
  let workoutsService: WorkoutsService;

  let getWorkoutsDataMock: jest.Mock;

  const mockRequest = {
    headers: new Headers({
      "x-user-email": "test@example.com",
    }),
    url: "http://example.com?limitBy=5",
  } as NextRequest;

  beforeEach(() => {
    jest.clearAllMocks();
    getWorkoutsDataMock = jest.fn();

    jest
      .spyOn(GetWorkoutsData.prototype, "getWorkoutsData")
      .mockImplementation(getWorkoutsDataMock);
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
});
