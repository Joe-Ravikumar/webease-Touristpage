import UserAuthorisation from "@/utils/UserAutherisation";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {

  // const { isAuthorized, role, userId } = await UserAuthorisation(request);
  // console.log(role, userId);
  const currentUser = request.cookies.get("jwt")?.value;
  if (!currentUser) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    request.nextUrl.pathname.startsWith("/order") ||
    request.nextUrl.pathname.startsWith("/profile")
  ) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/order/:path*", "/profile/:path*"],
};
