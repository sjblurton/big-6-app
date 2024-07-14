import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs";
import { hardCodedMockWorkout } from "@/modules/model/api/routes/workouts-id/mockData/workoutMock";
import { hardCodedMockWorkouts } from "@/modules/model/api/routes/workouts/mockData/workoutsMock";
import GetWorkoutData from "./getWorkoutData";

const mockCollectionName: WorkoutIds = "pull-ups";

const mockLimitBy = 5;

describe("GetWorkoutData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return parsed workout data when calling getWorkoutData", () => {
    const result = GetWorkoutData.getWorkoutData(
      mockCollectionName,
      mockLimitBy,
    );

    expect(result).toEqual(
      hardCodedMockWorkout(mockCollectionName, mockLimitBy),
    );
  });

  it("should return parsed workouts data when calling getWorkoutsData", () => {
    const email = "email@email.co.uk";
    const getWorkoutData = new GetWorkoutData(email);

    const result = getWorkoutData.getWorkoutsData();

    expect(result).toEqual(hardCodedMockWorkouts(email));
  });
});
