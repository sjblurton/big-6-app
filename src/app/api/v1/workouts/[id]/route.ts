import { NextResponse } from "next/server"
// import { type WorkoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"
import { mockPullUpWorkoutData } from "@/app/api/v1/workouts/shared/mockData/workout-mock"
import ErrorHandler from "@/app/api/error-handler/ErrorHandler"

export async function GET() {
    // request: NextRequest,
    // { params }: { params: { id: WorkoutIds } }
    try {
        return NextResponse.json(mockPullUpWorkoutData[0])
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
