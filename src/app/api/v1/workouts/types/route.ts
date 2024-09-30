import { NextResponse } from "next/server"
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler"
import { SanityClient } from "@/modules/sanity/lib/client"

export async function GET() {
    try {
        return NextResponse.json(await SanityClient.getExerciseIds())
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
