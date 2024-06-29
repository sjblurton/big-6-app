import { FirestoreError } from "@firebase/firestore";
import { ZodError, ZodIssue } from "zod";
import { API_ERROR_NAMES, ApiError, HTTP_ERROR_CODES } from "./ApiErrors";
import ErrorHandler from "./ErrorHandler";

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
}));

describe("ErrorHandler", () => {
  it("should handle an operational error", () => {
    const error = new ApiError({
      codeName: API_ERROR_NAMES.UNAUTHORIZED,
      httpCode: HTTP_ERROR_CODES.UNAUTHORIZED,
      description: "Unauthorized access",
      isOperational: true,
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
          message: "Unauthorized access",
        },
      },
      status: HTTP_ERROR_CODES.UNAUTHORIZED,
    });
  });

  it("should handle a non-operational error", () => {
    const error = new ApiError({
      codeName: API_ERROR_NAMES.UNAUTHORIZED,
      httpCode: HTTP_ERROR_CODES.UNAUTHORIZED,
      description: "Unauthorized access",
      isOperational: false,
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
          message: "Unauthorized access",
        },
      },
      status: HTTP_ERROR_CODES.UNAUTHORIZED,
    });
  });

  it("should handle a Firestore error", () => {
    const error = Object.create(FirestoreError.prototype);

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
          message: 'Validation error: Invalid email at "email"',
          issues: zodIssues,
        },
      },
      status: HTTP_ERROR_CODES.BAD_REQUEST,
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
