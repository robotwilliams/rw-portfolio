import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * POST /api/admin/logout
 *
 * Clears the admin session cookie.
 */
export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");

  return NextResponse.json({ success: true });
}
