import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
const isAuthRoute = createRouteMatcher(['/login(.*)', '/sign-up(.*)', '/verify-2fa(.*)', '/verify-email(.*)']);

export default clerkMiddleware(async (auth, req) => {
    const { isAuthenticated, redirectToSignIn } = await auth();

    // 1) Not logged in + trying to access dashboard => go to /login
    if (!isAuthenticated && isDashboardRoute(req)) {
        return redirectToSignIn({ returnBackUrl: req.url });
    }

    // 2) Logged in + trying to access auth pages or landing => go to dashboard
    if (isAuthenticated && (isAuthRoute(req) || req.nextUrl.pathname === '/')) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    // 3) Everything else: allow
    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};