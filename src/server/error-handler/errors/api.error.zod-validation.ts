import { type ZodIssue } from "zod-validation-error"

import {
    API_ERROR_NAMES,
    ApiBaseError,
    type ErrorInputs,
    HTTP_ERROR_CODES,
} from "./api.error.base"

export class ApiZodValidationError extends ApiBaseError {
    constructor({
        description,
        response,
        cause,
    }: Omit<ErrorInputs, "codeName" | "httpCode"> & {
        cause: ZodIssue[]
    }) {
        super({
            codeName: API_ERROR_NAMES.BAD_REQUEST,
            httpCode: HTTP_ERROR_CODES.BAD_REQUEST,
            description,
            response,
            cause,
        })
    }
}
