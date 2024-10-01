import { NextResponse } from "next/server"
import { CmsClient } from "@/modules/cms/client/client"
import ErrorHandler from "@/app/api/error-handler/ErrorHandler"

export async function GET() {
    try {
        return NextResponse.json(await CmsClient.getExerciseIds())
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
