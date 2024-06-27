import {ApiError, API_ERROR_NAMES, HTTP_ERROR_CODES} from "./ApiErrors";

describe("ApiError", () => {
  it("should create an ApiError instance with the correct properties", () => {
    const errorName = API_ERROR_NAMES.UNAUTHORIZED;
    const httpCode = HTTP_ERROR_CODES.UNAUTHORIZED;
    const description = "Unauthorized access";
    const isOperational = true;

    const error = new ApiError(errorName, httpCode, description, isOperational);

    expect(error).toBeInstanceOf(ApiError);
    expect(error.name).toBe(errorName);
    expect(error.httpCode).toBe(httpCode);
    expect(error.message).toBe(description);
    expect(error.isOperational).toBe(isOperational);
    expect(error.stack).toBeDefined();
  });

  it("should create an ApiError instance with default isOperational as true", () => {
    const errorName = API_ERROR_NAMES.INTERNAL_SERVER_ERROR;
    const httpCode = HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR;
    const description = "Internal server error";

    const error = new ApiError(errorName, httpCode, description);

    expect(error.isOperational).toBe(true);
  });

  it("should have a stack trace", () => {
    const errorName = API_ERROR_NAMES.NOT_FOUND;
    const httpCode = HTTP_ERROR_CODES.NOT_FOUND;
    const description = "Resource not found";

    const error = new ApiError(errorName, httpCode, description);

    expect(error.stack).toBeDefined();
    expect(typeof error.stack).toBe("string");
  });

  it("should correctly assign non-default isOperational value", () => {
    const errorName = API_ERROR_NAMES.BAD_REQUEST;
    const httpCode = HTTP_ERROR_CODES.BAD_REQUEST;
    const description = "Bad request";
    const isOperational = false;

    const error = new ApiError(errorName, httpCode, description, isOperational);

    expect(error.isOperational).toBe(isOperational);
  });
});
