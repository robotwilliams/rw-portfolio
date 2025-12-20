import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { requireAuth } from "@/lib/admin-auth-server";

/**
 * POST /api/admin/save-content
 *
 * Saves markdown content to files. Requires authentication.
 *
 * Body: {
 *   type: "page" | "project",
 *   slug: string (filename without .md),
 *   frontmatter: object,
 *   content: string (markdown content)
 * }
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const auth = await requireAuth();
    if (!auth.authenticated) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { type, slug, frontmatter, content } = await request.json();

    if (!type || !slug || !content) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Determine file path
    const contentDir = path.join(process.cwd(), "content");
    let filePath: string;

    if (type === "page") {
      filePath = path.join(contentDir, "pages", `${slug}.md`);
    } else if (type === "project") {
      filePath = path.join(contentDir, "portfolio", `${slug}.md`);
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid type" },
        { status: 400 }
      );
    }

    // Build markdown file with frontmatter
    const frontmatterString = matter.stringify(content, frontmatter || {});

    // Write file
    fs.writeFileSync(filePath, frontmatterString, "utf8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save content" },
      { status: 500 }
    );
  }
}
