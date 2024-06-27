import {ApiError} from "./ApiErrors";
import logger from "../../logger/logger";

class ErrorHandler {
  error: unknown;

  request: Request;

  constructor(error: unknown, request: Request) {
    this.error = error;
    this.request = request;
  }

  handle() {
    logger.error(this.error);
    if (this.error instanceof ApiError && this.error.isOperational) {
      // TODO: log the error to the database
      return this.error;
    }
    if (!(this.error instanceof ApiError)) {
      //   TODO: log the error to the database
      return new ApiError(
        "INTERNAL_SERVER_ERROR",
        500,
        "Internal Server Error"
      );
    }
    return this.error;
  }
}

export default ErrorHandler;
