import { NextResponse } from "next/server"

import ErrorHandler from "@/app/api/error-handler/ErrorHandler"
import exerciseCmsClient from "@/modules/cms/client/exercise/exercise-client"

export async function GET() {
    try {
        return NextResponse.json(await exerciseCmsClient.getExerciseIds())
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
