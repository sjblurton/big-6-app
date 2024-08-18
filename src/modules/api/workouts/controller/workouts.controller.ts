import { NextRequest, NextResponse } from "next/server"
import { WorkoutsService } from "../services/workouts.service"

class WorkoutsController {
    private readonly workoutsService: WorkoutsService

    constructor(request: NextRequest) {
        this.workoutsService = new WorkoutsService(request)
    }

    async GET() {
        return NextResponse.json(await this.workoutsService.getServiceData())
    }
}

export default WorkoutsController
