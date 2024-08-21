import { NextRequest, NextResponse } from "next/server"
import { WorkoutsService } from "./workouts.services"

class WorkoutsController {
    request: NextRequest

    constructor(request: NextRequest) {
        this.request = request
    }

    async GET() {
        return NextResponse.json(
            await new WorkoutsService(this.request).getServiceData()
        )
    }
}

export default WorkoutsController
