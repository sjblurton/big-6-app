import { NextResponse } from "next/server"

import { mockLatestWorkoutData } from "@/app/api/v1/workouts/shared/mockData/workout-mock"
import { workoutSchema } from "@/modules/model/workout/workout-schemas"

import ErrorHandler from "../../error-handler/ErrorHandler"
import { ApiZodValidationError } from "../../error-handler/errors/api.error.zod-validation"

export async function GET() {
    try {
        return NextResponse.json(mockLatestWorkoutData)
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}

export async function POST({ request }: { request: Request }) {
    try {
        const body = await workoutSchema
            .omit({ id: true })
            .safeParseAsync(await request.json())

        if (!body.success) {
            throw new ApiZodValidationError({
                cause: body.error.errors,
                description: "Invalid workout data",
            })
        }

        return NextResponse.json(body)
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
