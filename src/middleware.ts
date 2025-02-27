import { NextResponse, NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("token");
  const path = request.nextUrl.pathname;

  if (path === "/custom-pro-version") {
    if (token?.value) {
      return NextResponse.next();
    } else {
      return NextResponse.next();
      // return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/custom-pro-version"],
};
