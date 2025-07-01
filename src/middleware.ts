import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validPaths from "../validPaths.json";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const response = NextResponse.next();

  response.headers.set("x-pathname", request.nextUrl.pathname);

  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".")
  ) {
    return response;
  }

  if (pathname === "/home") {
    const url = request.nextUrl.clone();
    url.pathname = "/home/waitlist";
    return NextResponse.redirect(url);
  }

  const articleDynamicMatch = /^\/home\/articles\/\d+$/;
  if (articleDynamicMatch.test(pathname)) {
    return response;
  }
  const articleEditDynamicMatch = /^\/home\/articles\/edit\/\d+$/;
  if (articleEditDynamicMatch.test(pathname)) {
    return response;
  }

  const isValidPath = validPaths.includes(pathname);

  if (!isValidPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/home/waitlist";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};
