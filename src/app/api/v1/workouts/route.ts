import { NextResponse } from "next/server"

import { workoutSchema } from "@/schemas/workouts"
// eslint-disable-next-line jest/no-mocks-import -- temporary while working towards full implementation
import { mockLatestWorkoutData } from "@/server/__mocks__/workout-mock"

import ErrorHandler from "../../../../server/error-handler/ErrorHandler"
import { ApiZodValidationError } from "../../../../server/error-handler/errors/api.error.zod-validation"

// async function workoutDataPlusSteps(workoutData: WorkoutData[]) {
//     const workoutSteps = workoutData.map((workout) =>
//         exerciseCmsClient.getExerciseStep(workout.type, workout.level)
//     )
//     const workoutDataWithSteps = await Promise.all(workoutSteps).then((steps) =>
//         workoutData.map((workout, index) => ({
//             ...workout,
//             metadata: steps[index],
//         }))
//     )
//     return workoutDataWithSteps
// }

export async function GET() {
    try {
        return NextResponse.json(mockLatestWorkoutData)
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}

export async function POST(request: Request) {
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
