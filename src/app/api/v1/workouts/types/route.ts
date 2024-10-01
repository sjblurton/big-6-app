import { NextResponse } from "next/server"

import ErrorHandler from "@/app/api/error-handler/ErrorHandler"
import { CmsClient } from "@/modules/cms/client/client"

export async function GET() {
    try {
        return NextResponse.json(await CmsClient.getExerciseIds())
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
