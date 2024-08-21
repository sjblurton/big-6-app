import ErrorHandler from "@/modules/api/error-handler/ErrorHandler"
import LatestController from "./latest.controller"

export async function GET() {
    try {
        return await LatestController.GET()
    } catch (error) {
        const errorHandler = new ErrorHandler(error)
        const errorResponse = errorHandler.handle()
        return errorResponse
    }
}
