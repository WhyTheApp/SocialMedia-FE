import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validPaths from "../validPaths.json";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".") 
  ) {
    return NextResponse.next();
  }

  if (pathname === "/home") {
    const url = request.nextUrl.clone();
    url.pathname = "/home/waitlist";
    return NextResponse.redirect(url);
  }

  const articleDynamicMatch = /^\/home\/articles\/\d+$/;
  if (articleDynamicMatch.test(pathname)) {
    return NextResponse.next();
  }

  const isValidPath = validPaths.includes(pathname);

  if (!isValidPath) {
    const url = request.nextUrl.clone();
    url.pathname = "/home/waitlist";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
