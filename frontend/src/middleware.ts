import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt")?.value;

  const url = "/auth?signup=false";
  if (!token) {
    return NextResponse.redirect(new URL(url, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/study-session/:path*"],
};
