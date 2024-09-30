import { NextResponse } from "next/server"
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler"
import { mockLatestWorkoutData } from "@/modules/model/api/routes/workouts-id/mockData/workout-mock"

export async function GET() {
    try {
        return NextResponse.json(mockLatestWorkoutData)
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
