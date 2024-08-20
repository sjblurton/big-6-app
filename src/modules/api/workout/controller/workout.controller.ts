import { NextRequest, NextResponse } from "next/server"
import { WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs"
import { WorkoutService } from "../services/workout.service"

class WorkoutController {
    private readonly workoutService: WorkoutService

    workoutId: WorkoutIds

    constructor(request: NextRequest, params: { id: WorkoutIds }) {
        this.workoutId = params.id
        this.workoutService = new WorkoutService(request, params.id)
    }

    async GET() {
        return NextResponse.json(this.workoutService.getServiceData())
    }
}

export default WorkoutController
