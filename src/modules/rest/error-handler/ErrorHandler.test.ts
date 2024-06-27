import logger from "../../logger/logger";
import {ApiError, API_ERROR_NAMES, HTTP_ERROR_CODES} from "./ApiErrors";
import ErrorHandler from "./ErrorHandler";

jest.mock("../../logger/logger", () => ({
  error: jest.fn(),
}));

describe("ErrorHandler", () => {
  let mockRequest: Request;

  beforeEach(() => {
    mockRequest = {} as Request;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should log the error and return the ApiError if it is operational", () => {
    const error = new ApiError(
      API_ERROR_NAMES.UNAUTHORIZED,
      HTTP_ERROR_CODES.UNAUTHORIZED,
      "Unauthorized access",
      true
    );

    const errorHandler = new ErrorHandler(error, mockRequest);
    const result = errorHandler.handle();

    expect(logger.error).toHaveBeenCalledWith(error);
    expect(result).toBe(error);
  });

  it("should log the error and return a new ApiError if it is not an ApiError", () => {
    const error = new Error("Non-ApiError");

    const errorHandler = new ErrorHandler(error, mockRequest);
    const result = errorHandler.handle();

    expect(logger.error).toHaveBeenCalledWith(error);
    expect(result).toBeInstanceOf(ApiError);
    expect((result as ApiError).name).toBe(
      API_ERROR_NAMES.INTERNAL_SERVER_ERROR
    );
    expect((result as ApiError).httpCode).toBe(
      HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR
    );
    expect((result as ApiError).message).toBe("Internal Server Error");
  });

  it("should log the error and return the original ApiError if it is non-operational", () => {
    const error = new ApiError(
      API_ERROR_NAMES.INTERNAL_SERVER_ERROR,
      HTTP_ERROR_CODES.INTERNAL_SERVER_ERROR,
      "Some critical error",
      false
    );

    const errorHandler = new ErrorHandler(error, mockRequest);
    const result = errorHandler.handle();

    expect(logger.error).toHaveBeenCalledWith(error);
    expect(result).toBe(error);
  });
});
