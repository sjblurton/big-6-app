import { NextResponse } from "next/server"

import { type ErrorResponse } from "@/app/api/v1/workouts/shared/outputs/response-schema"

import { HTTP_ERROR_CODES, type HttpCode } from "../errors/api.error.base"

export const ErrorResponses = {
    respondToClient(
        message: string,
        status: HttpCode
    ): NextResponse<ErrorResponse> {
        return NextResponse.json({ error: { message } }, { status })
    },

    respondToClientWithInternalServerError() {
        return this.respondToClient(
            "Internal Server Error",
            HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR
        )
    },
};
