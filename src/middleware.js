import { NextResponse } from "next/server";

export function middleware(request) {
    return NextResponse.rewrite(new URL('/blogs', request.url))
}

export const config = {
    matcher: ['/about/mission', '/about/history']
}