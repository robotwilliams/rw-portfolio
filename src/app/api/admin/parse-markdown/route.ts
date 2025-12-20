import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";
import { requireAuth } from "@/lib/admin-auth-server";

/**
 * POST /api/admin/parse-markdown
 *
 * Parses markdown content to extract frontmatter and content.
 * Requires authentication.
 */
export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const auth = await requireAuth();
    if (!auth.authenticated) {
      return auth.response;
    }

    const { content } = await request.json();

    if (!content) {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    const parsed = matter(content);

    return NextResponse.json({
      frontmatter: parsed.data || {},
      content: parsed.content,
    });
  } catch (error) {
    console.error("Error parsing markdown:", error);
    return NextResponse.json(
      { error: "Failed to parse markdown" },
      { status: 500 }
    );
  }
}
