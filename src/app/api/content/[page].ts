import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

/**
 * Allowed Page Types
 *
 * Defines which pages are allowed to be served through this API route.
 * This provides security by preventing access to unauthorized content
 * and ensures only valid pages can be requested.
 */
const ALLOWED = ["home", "about", "work", "contact"];

/**
 * GET Handler for Content API Route
 *
 * This API route serves HTML content generated from markdown files.
 * It's used by the WindowContent component to dynamically load
 * page content within the desktop windows for pages other than work.
 *
 * The route:
 * 1. Validates the requested page is allowed
 * 2. Reads the corresponding markdown file
 * 3. Extracts the content (excluding frontmatter)
 * 4. Converts markdown to HTML
 * 5. Returns the HTML as JSON response
 *
 * This approach provides:
 * - Dynamic content loading without page refreshes
 * - SEO-friendly static content generation
 * - Consistent styling across all pages
 * - Easy content management through markdown files
 * - Note: Work page has its own interactive system with project windows
 *
 * @param req - Next.js request object
 * @param params - Route parameters containing the page name
 * @returns JSON response with HTML content or error
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { page: string } }
) {
  const { page } = params;

  // Validate that the requested page is allowed
  if (!ALLOWED.includes(page)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Construct the file path for the requested page
  const filePath = path.join(process.cwd(), "content/pages", `${page}.md`);

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  try {
    // Read the markdown file
    const file = fs.readFileSync(filePath, "utf8");

    // Extract content from frontmatter
    const { content } = matter(file);

    // Convert markdown to HTML using remark processor
    const processed = await remark().use(html).process(content);
    const htmlContent = processed.toString();

    // Return the HTML content as JSON response
    return NextResponse.json({ html: htmlContent });
  } catch (error) {
    // Handle any errors during processing
    console.error(`Error processing ${page}:`, error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
