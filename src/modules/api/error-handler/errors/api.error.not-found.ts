import {
    API_ERROR_NAMES,
    ApiBaseError,
    ErrorInputs,
    HTTP_ERROR_CODES,
} from "./api.error.base"

export class ApiNotFoundError extends ApiBaseError {
    constructor({
        description,
        response,
        cause,
    }: Omit<ErrorInputs, "codeName" | "httpCode">) {
        super({
            codeName: API_ERROR_NAMES.NOT_FOUND,
            httpCode: HTTP_ERROR_CODES.NOT_FOUND,
            description,
            response,
            cause,
        })
    }
}
