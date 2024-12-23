export const API_ERROR_NAMES = {
    UNAUTHORIZED: "UNAUTHORIZED",
    FORBIDDEN: "FORBIDDEN",
    NOT_FOUND: "NOT_FOUND",
    INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
    BAD_REQUEST: "BAD_REQUEST",
} as const

type ApiErrorNames = (typeof API_ERROR_NAMES)[keyof typeof API_ERROR_NAMES]

export const HTTP_ERROR_CODES = {
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    BAD_REQUEST: 400,
} as const

export type HttpCode = (typeof HTTP_ERROR_CODES)[keyof typeof HTTP_ERROR_CODES]

export type ErrorInputs = {
    codeName: ApiErrorNames
    httpCode: HttpCode
    description: string
    response?: Response
    request?: Request
    cause?: unknown
}

export abstract class ApiBaseError extends Error {
    public readonly codeName: ApiErrorNames

    public readonly httpCode: HttpCode

    public readonly request?: Request

    public readonly response?: Response

    public readonly cause: unknown

    constructor({
        description,
        httpCode,
        codeName,
        response,
        cause,
    }: ErrorInputs) {
        super(description)

        Object.setPrototypeOf(this, ApiBaseError.prototype)

        this.codeName = codeName
        this.httpCode = httpCode
        this.response = response
        this.cause = cause

        Error.captureStackTrace(this, this.constructor)
    }
}
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

  Explanation:
  Using Object.setPrototypeOf in Constructor:

  While the goal was to avoid Object.setPrototypeOf, using it once within the constructor
  (and not dynamically changing prototypes elsewhere) mitigates most performance concerns.
  This is still a common pattern for extending built-in objects like Error.

  Setting Properties Directly:
  We set the properties (name and httpCode) directly on this.
  Calling Error.captureStackTrace:

  Ensures that the stack trace correctly references the ApiError class.
*/
