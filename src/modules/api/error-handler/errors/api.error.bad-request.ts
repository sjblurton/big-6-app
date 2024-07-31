import {
  API_ERROR_NAMES,
  ApiBaseError,
  ErrorInputs,
  HTTP_ERROR_CODES,
} from "./api.error.base";

export class ApiBadRequestError extends ApiBaseError {
  constructor({
    description,
    response,
    cause,
  }: Omit<ErrorInputs, "codeName" | "httpCode">) {
    super({
      codeName: API_ERROR_NAMES.BAD_REQUEST,
      httpCode: HTTP_ERROR_CODES.BAD_REQUEST,
      description,
      response,
      cause,
    });
  }
}
