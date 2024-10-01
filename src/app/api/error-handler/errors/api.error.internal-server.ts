import {
    ApiBaseError,
    type ErrorInputs,
    HTTP_ERROR_CODES,
    API_ERROR_NAMES,
} from "./api.error.base"

export class ApiInternalServerError extends ApiBaseError {
    constructor({
        description,
        response,
        cause,
    }: Omit<ErrorInputs, "codeName" | "httpCode">) {
        super({
            codeName: API_ERROR_NAMES.INTERNAL_SERVER_ERROR,
            httpCode: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
            description,
            response,
            cause,
        })
    }
}
