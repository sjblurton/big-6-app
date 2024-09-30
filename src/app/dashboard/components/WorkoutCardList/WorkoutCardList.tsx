import { MuiGrid } from "@/modules/components/library/mui"
import { mockLatestWorkoutData } from "@/modules/model/api/routes/workouts-id/mockData/workout-mock"
import WorkoutCard from "../WorkoutCard/WorkoutCard"

async function WorkoutCardList() {
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
