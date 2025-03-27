import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("access-token")?.value;
    const url = req.nextUrl;
    const resetToken = url.searchParams.get("token")

    // console.log("middleware", url.pathname);
    // console.log("token from cookies", token);
    // console.log("url token", resetToken);


    // protect admin pages 
    // if ((!token && url.pathname.startsWith("/admin")) && url.pathname !== "/admin/login") {
    //     return NextResponse.redirect(new URL("/admin/login", req.url));
    // }

    // protect reset pages to be only accessed when there is a token in the url
    if (!resetToken && url.pathname.startsWith("/auth/reset-password")) {
        return NextResponse.redirect(new URL("/auth/forgotten-password", req.url))
    }
    return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*", "/auth/reset-password(.*)"] };
