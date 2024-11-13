import { NextResponse } from "next/server"

// eslint-disable-next-line jest/no-mocks-import -- temporary while working towards full implementation
import { mockPullUpWorkoutData } from "@/server/__mocks__/workout-mock"
import ErrorHandler from "@/server/error-handler/ErrorHandler"
// import { type WorkoutIds } from "@/modules/model/api/routes/workouts-id/outputs/workout-data-schemas"

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
