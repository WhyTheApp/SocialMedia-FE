import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import validPaths from "../validPaths.json";

let cachedSlugMap: Record<string, string> = {};
let lastLoadTime = 0;
const cacheDurationMs = 30 * 1000;

async function loadSlugMap() {
  const now = Date.now();
  if (!cachedSlugMap || now - lastLoadTime > cacheDurationMs) {
    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL;

      const res = await fetch(`${backendUrl}articles/get-slug-map`);

      const retrievedSlugMap: { id: number; slug: string }[] = await res.json();

      for (const { id, slug } of retrievedSlugMap) {
        cachedSlugMap[id.toString()] = slug;
      }
      lastLoadTime = now;
    } catch (err) {
      console.error("❌ Failed to fetch slug map in middleware:", err);
      cachedSlugMap = {};
    }
  }
  return cachedSlugMap!;
}

export async function middleware(request: NextRequest) {
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

  const articleIdMatch = pathname.match(/^\/home\/articles\/(\d+)$/);
  if (articleIdMatch) {
    const id = articleIdMatch[1];
    console.log(cachedSlugMap);
    await loadSlugMap();
    const slug = cachedSlugMap![id];
    if (slug) {
      const url = request.nextUrl.clone();
      url.pathname = `/home/articles/${slug}`;
      return NextResponse.redirect(url);
    }
    return response;
  }

  const articleSlugMatch = /^\/home\/articles\/[a-zA-Z0-9-]+$/;
  if (articleSlugMatch.test(pathname)) return response;
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
