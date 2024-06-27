export const API_ERROR_NAMES = {
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  BAD_REQUEST: "BAD_REQUEST",
} as const;

type ApiErrorNames = (typeof API_ERROR_NAMES)[keyof typeof API_ERROR_NAMES];

export const HTTP_ERROR_CODES = {
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  BAD_REQUEST: 400,
};

type HttpCode = (typeof HTTP_ERROR_CODES)[keyof typeof HTTP_ERROR_CODES];

export class ApiError extends Error {
  public readonly name: ApiErrorNames;

  public readonly httpCode: HttpCode;

  public readonly isOperational: boolean;

  constructor(
    name: ApiErrorNames,
    httpCode: HttpCode,
    description: string,
    isOperational = true,
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
