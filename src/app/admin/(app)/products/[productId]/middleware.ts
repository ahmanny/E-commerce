import { NextRequest, NextResponse } from "next/server";




export function middleware(req: NextRequest) {
    const url = req.nextUrl

    // check if routes matches /products/{id}

    if (url.pathname.startsWith("/products/")) {
        const id = url.pathname.split("/").pop();

        if (!id || !/^\d+$/.test(id)) {
            return NextResponse.redirect(new URL("/error", req.url));

        }
    }
    return NextResponse.next();

}


export const config = {
    matcher: "/products/:path*"
}