import { type NextRequest } from "next/server"
import { type WorkoutIds } from "@/modules/model/api/routes/workouts/inputs/inputs"
import ErrorHandler from "@/modules/api/error-handler/ErrorHandler"
import WorkoutController from "@/modules/api/workout/controller/workout.controller"

export async function GET(
    request: NextRequest,
    { params }: { params: { id: WorkoutIds } }
) {
    try {
        const controller = new WorkoutController(request, params)
        return await controller.GET()
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
