import { NextResponse } from "next/server";
import { getAllPortfolioProjects } from "@/lib/markdown";

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

    return NextResponse.json({
      success: true,
      data: projects,
    });
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
