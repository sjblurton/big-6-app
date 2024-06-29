import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import ErrorHandler from "./modules/rest/error-handler/ErrorHandler";
import {
  API_ERROR_NAMES,
  ApiError,
  HTTP_ERROR_CODES,
} from "./modules/rest/error-handler/ApiErrors";

export async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.UNAUTHORIZED,
        httpCode: HTTP_ERROR_CODES.UNAUTHORIZED,
        description: "no token provided",
      });
    }

    const { email } = token;

    if (!email) {
      throw new ApiError({
        codeName: API_ERROR_NAMES.FORBIDDEN,
        httpCode: HTTP_ERROR_CODES.FORBIDDEN,
        description: "no email provided in token",
        isOperational: true,
      });
    }

    const requestHeaders = new Headers(req.headers);
    requestHeaders.set("x-user-email", email);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    const errorResponse = errorHandler.handle();
    return errorResponse;
  }
}

export const config = {
  matcher: ["/api/workouts/:path*"],
};
