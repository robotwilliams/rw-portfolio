import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { requireAuth } from "@/lib/admin-auth-server";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

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
 *
 * Note: On Vercel, file system writes are not persistent. Consider using
 * a database or external storage for production content management.
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

    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Write file
    fs.writeFileSync(filePath, frontmatterString, "utf8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving content:", error);
    
    // Provide more detailed error information
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Unknown error occurred";
    
    // Check if it's a filesystem permission error (common on Vercel)
    if (errorMessage.includes("EACCES") || errorMessage.includes("permission") || errorMessage.includes("read-only")) {
      return NextResponse.json(
        { 
          success: false, 
          error: "File system is read-only. This deployment platform (Vercel) doesn't support file writes. Consider using a database or external storage for content management." 
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: `Failed to save content: ${errorMessage}` 
      },
      { status: 500 }
    );
  }
}
