import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * Server-side Admin Authentication Helper
 *
 * Simple utilities for checking authentication in API routes.
 */

/**
 * Checks if the current request is authenticated.
 * Returns the cookie store if authenticated, null otherwise.
 */
export async function checkAuth(): Promise<Awaited<ReturnType<typeof cookies>> | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value === "authenticated") {
    return cookieStore;
  }

  return null;
}

/**
 * Middleware helper that returns an unauthorized response if not authenticated.
 * Use this in API routes that require authentication.
 */
export async function requireAuth(): Promise<
  | { authenticated: true; cookieStore: Awaited<ReturnType<typeof cookies>> }
  | { authenticated: false; response: NextResponse }
> {
  const cookieStore = await checkAuth();

  if (!cookieStore) {
    return {
      authenticated: false,
      response: NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      ),
    };
  }

  return { authenticated: true, cookieStore };
}
