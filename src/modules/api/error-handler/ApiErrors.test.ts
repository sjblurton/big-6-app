import {
  ApiError,
  API_ERROR_NAMES,
  HTTP_ERROR_CODES,
  ErrorInputs,
} from "./ApiErrors";

function mockError(error: Partial<ErrorInputs>): ApiError {
  return new ApiError({
    codeName: API_ERROR_NAMES.INTERNAL_SERVER_ERROR,
    httpCode: HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
    description: "Internal server error",
    isOperational: true,
    cause: new Error("Mock error"),
    ...error,
  });
}

describe("ApiError", () => {
  it("should create an ApiError instance with the correct properties", () => {
    const codeName = API_ERROR_NAMES.UNAUTHORIZED;
    const httpCode = HTTP_ERROR_CODES.UNAUTHORIZED;
    const description = "Unauthorized access";

    const error = mockError({
      codeName,
      description,
      httpCode,
    });

    expect(error).toBeInstanceOf(ApiError);
    expect(error.codeName).toBe(codeName);
    expect(error.httpCode).toBe(httpCode);
    expect(error.message).toBe(description);
    expect(error.isOperational).toBe(true);
    expect(error.stack).toBeDefined();
    expect(error.cause).toBeDefined();
  });

  it("should create an ApiError instance with default isOperational as false", () => {
    const isOperational = false;

    const error = mockError({ isOperational });

    expect(error.isOperational).toBe(false);
  });

  it("should have a stack trace", () => {
    const codeName = API_ERROR_NAMES.NOT_FOUND;
    const httpCode = HTTP_ERROR_CODES.NOT_FOUND;
    const description = "Resource not found";

    const error = mockError({ codeName, httpCode, description });

    expect(error.stack).toBeDefined();
    expect(typeof error.stack).toBe("string");
  });

  it("should correctly assign non-default isOperational value", () => {
    const codeName = API_ERROR_NAMES.BAD_REQUEST;
    const httpCode = HTTP_ERROR_CODES.BAD_REQUEST;
    const description = "Bad request";
    const isOperational = true;

    const error = mockError({ codeName, httpCode, description, isOperational });

    expect(error.isOperational).toBe(isOperational);
  });
});
