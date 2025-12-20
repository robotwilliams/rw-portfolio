import { NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * GET /api/admin/check
 *
 * Checks if user is authenticated by verifying session cookie.
 */
export async function GET() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (session?.value === "authenticated") {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false });
}
