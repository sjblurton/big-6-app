import { NextResponse } from "next/server"
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler"
// import { type WorkoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"
import { mockPullUpWorkoutData } from "@/modules/model/api/routes/workouts-id/mockData/workout-mock"

export async function GET() {
    // request: NextRequest,
    // { params }: { params: { id: WorkoutIds } }
    try {
        return NextResponse.json(mockPullUpWorkoutData)
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
