import {
  API_ERROR_NAMES,
  ApiBaseError,
  ErrorInputs,
  HTTP_ERROR_CODES,
} from "./api.error.base";

export class ApiUnauthorizedError extends ApiBaseError {
  constructor({
    description,
    isOperational,
    response,
    cause,
  }: Omit<ErrorInputs, "codeName" | "httpCode">) {
    super({
      codeName: API_ERROR_NAMES.UNAUTHORIZED,
      httpCode: HTTP_ERROR_CODES.UNAUTHORIZED,
      description,
      isOperational,
      response,
      cause,
    });
  }
}
