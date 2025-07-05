import { NextRequest, NextResponse } from "next/server";
import { markdownToHtml } from "@/lib/markdown";

/**
 * POST /api/content/markdown
 *
 * Converts markdown content to HTML for client-side rendering.
 * This endpoint is used by the ProjectWindow component to render project content
 * within the Windows 98-style project windows that open when users click
 * on project icons in the work page grid.
 *
 * The endpoint:
 * 1. Receives markdown content from the client
 * 2. Converts it to HTML using the markdown utility
 * 3. Returns the HTML for rendering in project windows
 *
 * This enables dynamic project content rendering without server-side
 * file system access in client components.
 */
export async function POST(request: NextRequest) {
  try {
    const { markdown } = await request.json();

    if (!markdown) {
      return NextResponse.json(
        {
          success: false,
          error: "Markdown content is required",
        },
        { status: 400 }
      );
    }

    const html = await markdownToHtml(markdown);

    return NextResponse.json({
      success: true,
      data: html,
    });
  } catch (error) {
    console.error("Error converting markdown:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to convert markdown",
      },
      { status: 500 }
    );
  }
}
