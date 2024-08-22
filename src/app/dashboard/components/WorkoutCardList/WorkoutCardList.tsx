import { MuiGrid } from "@/modules/components/library/mui"
import { fetchLatestWorkouts } from "@/modules/fetch/workouts"
import WorkoutCard from "../WorkoutCard/WorkoutCard"

async function WorkoutCardList() {
    const workoutHistory = await fetchLatestWorkouts()
    return (
        <MuiGrid container mt={3} mb={1}>
            {workoutHistory.map((workout) => (
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
