import { type NextRequest } from "next/server"
import GetWorkoutData from "@/modules/database/workouts/read/get-workout-data"

export class WorkoutsService {
    request: NextRequest

    getWorkoutData: GetWorkoutData | null

    constructor(request: NextRequest) {
        this.request = request
        this.getWorkoutData = null
    }

    async getServiceData() {
        this.getWorkoutData = new GetWorkoutData("simon.blurton.dev@gmail.com")

        return this.getWorkoutData.getWorkoutsData()
    }
}
