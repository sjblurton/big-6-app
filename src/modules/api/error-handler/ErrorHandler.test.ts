import { ZodError, ZodIssue } from "zod";
import ErrorHandler from "./ErrorHandler";
import { HTTP_ERROR_CODES } from "./errors/api.error.base";
import { ApiBadRequestError } from "./errors/api.error.bad-request";
import { ApiInternalServerError } from "./errors/api.error.internal-server";

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn((body, options) => ({
      status: options.status,
      body: JSON.stringify(body),
    })),
  },
}));

jest.mock("../../logger/logger", () => ({
  error: jest.fn(),
  info: jest.fn(),
}));

describe("ErrorHandler", () => {
  it("should handle an operational error", () => {
    const error = new ApiBadRequestError({
      description: "Bad request",
    });
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle() as {
      status: number;
      body: string | null;
    };

    if (errorResponse.body === null) {
      throw new Error("Body is null");
    }

    const parsedResponse = {
      status: errorResponse.status,
      body: JSON.parse(errorResponse.body),
    };

    expect(parsedResponse).toEqual({
      body: {
        error: {
          message: "Bad request",
        },
      },
      status: HTTP_ERROR_CODES.BAD_REQUEST,
    });
  });

  it("should handle a non-operational error", () => {
    const error = new ApiInternalServerError({
      description: "Bad request",
    });
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle() as {
      status: number;
      body: string | null;
    };

    if (errorResponse.body === null) {
      throw new Error("Body is null");
    }

    const parsedResponse = {
      status: errorResponse.status,
      body: JSON.parse(errorResponse.body),
    };

    expect(parsedResponse).toEqual({
      body: {
        error: {
          message: "Internal Server Error",
        },
      },
      status: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
    });
  });

  it("should handle a Zod error", () => {
    const zodIssues: ZodIssue[] = [
      {
        message: "Invalid email",
        path: ["email"],
        code: "invalid_type",
        expected: "string",
        received: "number",
      },
    ];

    const error = new ZodError(zodIssues);

    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle() as {
      status: number;
      body: string | null;
    };

    if (errorResponse.body === null) {
      throw new Error("Body is null");
    }

    const parsedResponse = {
      status: errorResponse.status,
      body: JSON.parse(errorResponse.body),
    };

    expect(parsedResponse).toEqual({
      body: {
        error: {
          message: "Internal Server Error",
        },
      },
      status: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
    });
  });

  it("should handle an unknown error", () => {
    const error = new Error("Unknown error");

    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle() as {
      status: number;
      body: string | null;
    };

    if (errorResponse.body === null) {
      throw new Error("Body is null");
    }

    const parsedResponse = {
      status: errorResponse.status,
      body: JSON.parse(errorResponse.body),
    };

    expect(parsedResponse).toEqual({
      body: {
        error: {
          message: "Internal Server Error",
        },
      },
      status: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
    });
  });
});
