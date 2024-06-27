import {NextResponse} from "next/server";
import {getToken} from "next-auth/jwt";
import type {NextRequest} from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({req, secret: process.env.NEXTAUTH_SECRET});

  if (!token) {
    throw new Error("UNAUTHORIZED");
  }

  const {email} = token;

  if (!email) {
    throw new Error("UNAUTHORIZED");
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-user-email", email);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/api/workouts/:path*"],
};
