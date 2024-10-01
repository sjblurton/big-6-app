import { NextResponse } from "next/server"
import { mockLatestWorkoutData } from "@/app/api/v1/workouts/shared/mockData/workout-mock"
import ErrorHandler from "../../error-handler/ErrorHandler"

export async function GET() {
    try {
        return NextResponse.json(mockLatestWorkoutData)
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
