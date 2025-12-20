import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { requireAuth } from "@/lib/admin-auth-server";

/**
 * GET /api/admin/get-raw-project/[slug]
 *
 * Returns raw markdown file content for project editing.
 * Requires authentication.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    // Check authentication
    const auth = await requireAuth();
    if (!auth.authenticated) {
      return auth.response;
    }

    const { slug } = await params;
    const filePath = path.join(
      process.cwd(),
      "content",
      "portfolio",
      `${slug}.md`
    );

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: "File not found" },
        { status: 404 }
      );
    }

    const content = fs.readFileSync(filePath, "utf8");

    return NextResponse.json({ content });
  } catch (error) {
    console.error("Error reading file:", error);
    return NextResponse.json(
      { error: "Failed to read file" },
      { status: 500 }
    );
  }
}
