import { type NextRequest, NextResponse } from "next/server"
import { type WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs"
import { WorkoutService } from "../../../../../../modules/api/services/workout.service"

class WorkoutController {
    private readonly workoutService: WorkoutService

    workoutId: WorkoutIds

    constructor(request: NextRequest, params: { id: WorkoutIds }) {
        this.workoutId = params.id
        this.workoutService = new WorkoutService(request, params.id)
    }

    // This controller should validate the params i.e. this.workoutService.validateParams(params.id)

    // It should request from the service what data it wants i.e. this.workoutService.getWorkoutData(validated.params.id)

    async GET() {
        return NextResponse.json(this.workoutService.getServiceData())
    }
}

export default WorkoutController
