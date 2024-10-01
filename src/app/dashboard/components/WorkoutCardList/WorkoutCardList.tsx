import { MuiGrid } from "@/modules/components/library/mui"
import { type WorkoutData } from "@/modules/model/workout/workout-schemas"
import WorkoutCard from "../WorkoutCard/WorkoutCard"

async function WorkoutCardList() {
    const mockLatestWorkoutData: WorkoutData[] = await fetch(
        "http://localhost:3000/api/v1/workouts"
    ).then((res) => res.json())

    return (
        <MuiGrid container mt={3} mb={1}>
            {mockLatestWorkoutData.map((workout) => (
                <MuiGrid
                    item
                    xs={12}
                    key={workout.key}
                    display="flex"
                    alignContent="center"
                    justifyContent="center"
                >
                    <WorkoutCard workout={workout} />
                </MuiGrid>
            ))}
        </MuiGrid>
    )
}

export default WorkoutCardList
