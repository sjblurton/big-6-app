import {
    API_ERROR_NAMES,
    ApiBaseError,
    type ErrorInputs,
    HTTP_ERROR_CODES,
} from "./api.error.base"

export class ApiForbiddenError extends ApiBaseError {
    constructor({
        description,
        response,
        cause,
    }: Omit<ErrorInputs, "codeName" | "httpCode">) {
        super({
            codeName: API_ERROR_NAMES.FORBIDDEN,
            httpCode: HTTP_ERROR_CODES.FORBIDDEN,
            description,
            response,
            cause,
        })
    }
}
