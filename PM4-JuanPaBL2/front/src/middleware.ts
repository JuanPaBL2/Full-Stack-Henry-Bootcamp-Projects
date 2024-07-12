//_______MIDDLEWARE NEXT.JS_________________

/* src/middleware.ts (se crea en la misma altura que carpeta app, no dentro de ella.)*/

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get('token')?.value || null;
    if (!token) {

        return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
        
}

export const config = {
    matcher: [
        "/userdashboard",
        "/userdashboard/personalinfo",
        "/userdashboard/userdetailbuy",
        "/carritoview"
    ],
};