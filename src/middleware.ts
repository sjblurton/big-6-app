import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import ErrorHandler from "./modules/api/error-handler/ErrorHandler";
import { ApiUnauthorizedError } from "./modules/api/error-handler/errors/api.error.Unauthorized";
import { ApiForbiddenError } from "./modules/api/error-handler/errors/api.error.forbidden";

export async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      throw new ApiUnauthorizedError({
        description: "no token provided",
        isOperational: true,
      });
    }

    const { email } = token;

    if (!email) {
      throw new ApiForbiddenError({
        description: "Forbidden",
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
  matcher: ["/api/workouts/:path*", "/api/workouts"],
};
