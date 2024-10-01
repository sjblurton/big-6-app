import { ZodError } from "zod"
import { type NextResponse } from "next/server"
import { fromError } from "zod-validation-error"
import { type ErrorResponse } from "@/app/api/v1/workouts/shared/outputs/response-schema"
import logger from "@/modules/logger/logger"
import { ErrorResponses } from "./responses/responses"
import { ApiBaseError } from "./errors/api.error.base"

// TODO: Add request and response objects to the constructor for logging to the database when ready
class ErrorHandler {
    error: unknown

    constructor(error: unknown) {
        this.error = error
    }

    handle(): NextResponse<ErrorResponse> {
        if (!(this.error instanceof ApiBaseError)) {
            return this.handelNoneOperationalError()
        }

        const isOperationalError = this.error.httpCode < 500

        if (!isOperationalError) {
            this.logToDatabase()
            return this.handelNoneOperationalError()
        }

        return this.handelOperationalError(this.error)
    }

    private logError(prefix: string) {
        logger.error(prefix, this.error)
    }

    private logToDatabase() {
        if (this.error instanceof ZodError) {
            logger.info(
                "Request, response, and error objects will be logged here",
                "Zod error:",
                fromError(this.error).toString(),
                this.error.issues
            )
        }
        logger.info("Request, response, and error objects will be logged here")
    }

    private handelNoneOperationalError() {
        this.logToDatabase()
        this.logError("Non-operational error:")
        return ErrorResponses.respondToClientWithInternalServerError()
    }

    private handelOperationalError(error: ApiBaseError) {
        this.logError("Operational error:")
        return ErrorResponses.respondToClient(error.message, error.httpCode)
    }
}

export default ErrorHandler
