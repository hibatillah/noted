import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isLogin = true

  if (!isLogin) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: [
    "/api/:path*",
    "/home/:path*",
    "/notes/:path*",
    "/profile/:path*",
  ],
};
