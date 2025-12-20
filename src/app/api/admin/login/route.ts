import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * POST /api/admin/login
 *
 * Simple authentication endpoint that checks credentials
 * and sets a session cookie if valid.
 */
export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Get credentials from environment variables (required in production)
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Require credentials to be set
    if (!adminUsername || !adminPassword) {
      console.error("Admin credentials not configured - ADMIN_USERNAME and ADMIN_PASSWORD must be set");
      return NextResponse.json(
        { 
          success: false, 
          error: "Server configuration error: Admin credentials not set. Please configure ADMIN_USERNAME and ADMIN_PASSWORD environment variables." 
        },
        { status: 500 }
      );
    }

    // Validate credentials
    if (username === adminUsername && password === adminPassword) {
      // Set session cookie (simple but effective)
      const cookieStore = await cookies();
      cookieStore.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, error: "Invalid credentials" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { success: false, error: "Login failed" },
      { status: 500 }
    );
  }
}
