import { type NextResponse } from "next/server"
import { ZodError } from "zod"
import { fromError } from "zod-validation-error"

import { type ErrorResponse } from "@/@types/responses/errors"
import logger from "@/libs/logger/logger"

import { ApiBaseError } from "./errors/api.error.base"
import { ErrorResponses } from "./responses/responses"

// TODO: Add request and response objects to the constructor for logging to the database when ready
class ErrorHandler {
    readonly error: unknown
    readonly request?: Request

    constructor(error: unknown, request?: Request) {
        this.error = error
        this.request = request
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
        logger.error(prefix, { errors: this.error, request: this.request })
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
