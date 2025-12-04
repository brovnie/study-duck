import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface JWTTokensInterface {
  id: string;
  iat: number;
  exp: number;
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const url = "/auth?signup=false";
  if (!token) {
    return NextResponse.redirect(new URL(url, req.url));
  }

  try {
    const decoded = jwtDecode<JWTTokensInterface>(token);

    if (decoded.exp! * 1000 < Date.now()) {
      return NextResponse.redirect(new URL(url, req.url));
    }
    if (!decoded.id) {
      return NextResponse.redirect(new URL(url, req.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL(url, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
