import { NextResponse } from "next/server"

import { workoutSchema } from "@/schemas/workouts"
// eslint-disable-next-line jest/no-mocks-import -- temporary while working towards full implementation
import { mockPullUpWorkoutData } from "@/server/__mocks__/workout-mock"
import ErrorHandler from "@/server/error-handler/ErrorHandler"
import { ApiZodValidationError } from "@/server/error-handler/errors/api.error.zod-validation"

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

export async function PUT(request: Request) {
    try {
        const body = await workoutSchema
            .partial()
            .omit({ id: true })
            .safeParseAsync(await request.json())

        if (!body.success) {
            throw new ApiZodValidationError({
                cause: body.error.errors,
                description: "Invalid workout data",
            })
        }

        return NextResponse.json({
            id: "a2d9c1b6-1b0c-4f4b-8b6e-7d7a3d7b1a4a",
            ...body.data,
        })
    } catch (error) {
        const errorHandler = new ErrorHandler(error, request)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
