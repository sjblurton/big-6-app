import { NextResponse } from "next/server"

import workoutCmsClient from "@/libs/cms/clients/workout-cms-client"
import ErrorHandler from "@/server/error-handler/ErrorHandler"

export async function GET() {
    try {
        return NextResponse.json(await workoutCmsClient.getExerciseIds())
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
