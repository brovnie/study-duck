import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserById } from "./lib/api/users";

interface JWTTokensInterface {
  id: string;
  iat: number;
  exp: number;
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("jwt")?.value;

  const url = "/auth?signup=false";
  if (!token) {
    console.log("No token found, redirecting to auth page");
    //return NextResponse.redirect(new URL(url, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/study-session/:path*"],
};
