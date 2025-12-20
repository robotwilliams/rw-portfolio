import { NextResponse } from "next/server";
import { getAllPortfolioProjects } from "@/lib/markdown";

// Disable Next.js caching for this route to ensure fresh content
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * GET /api/content/projects
 *
 * Returns all portfolio projects as JSON for client-side consumption.
 * This endpoint is used by the work page to display the interactive
 * project grid with Windows 98-style icons and window management.
 *
 * The endpoint:
 * 1. Reads all project markdown files from the content/portfolio directory
 * 2. Extracts frontmatter metadata and content for each project
 * 3. Returns structured project data for the work page grid
 *
 * This enables the work page to display project icons that users can
 * click to open detailed project windows within the desktop environment.
 */
export async function GET() {
  try {
    const projects = getAllPortfolioProjects();

    // Disable caching to ensure admin updates are immediately visible
    return NextResponse.json(
      {
        success: true,
        data: projects,
      },
      {
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
          "Pragma": "no-cache",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching projects:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch projects",
      },
      { status: 500 }
    );
  }
}
