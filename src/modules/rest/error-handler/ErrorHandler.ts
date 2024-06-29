import { FirestoreError } from "@firebase/firestore";
import { ZodError } from "zod";
import { NextResponse } from "next/server";
import { fromError } from "zod-validation-error";
import { ApiError, HTTP_ERROR_CODES } from "./ApiErrors";
import logger from "../../logger/logger";

// TODO: Add request and response objects to the constructor for logging to the database when ready
class ErrorHandler {
  error: unknown;

  constructor(error: unknown) {
    this.error = error;
  }

  handle() {
    if (this.error instanceof ApiError && this.error.isOperational) {
      logger.error("Operational error:", this.error);

      return NextResponse.json(
        { error: { message: this.error.message } },
        { status: this.error.httpCode },
      );
    }

    if (this.error instanceof ApiError) {
      // TODO: Log the error to the database for further analysis

      logger.error("Non-operational error:", this.error);
      return NextResponse.json(
        { error: { message: this.error.message } },
        { status: this.error.httpCode },
      );
    }

    if (this.error instanceof FirestoreError) {
      logger.error("Firestore Error:", this.error);
      // TODO: Log the error to the database for further analysis

      return NextResponse.json(
        { error: { message: "Internal Server Error" } },
        { status: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR },
      );
    }

    if (this.error instanceof ZodError) {
      // TODO: Log the error to the database for further analysis

      logger.error("Zod Error:", this.error);

      return NextResponse.json(
        {
          error: {
            message: fromError(this.error).toString(),
            issues: this.error.issues,
          },
        },
        { status: HTTP_ERROR_CODES.BAD_REQUEST },
      );
    }

    logger.error("Unknown error:", this.error);
    // TODO: Log the error to the database for further analysis

    return NextResponse.json(
      { error: { message: "Internal Server Error" } },
      { status: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR },
    );
  }
}

export default ErrorHandler;
