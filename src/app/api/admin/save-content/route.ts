import { requireAuth } from "@/lib/admin-auth-server";
import fs from "fs";
import matter from "gray-matter";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Save content using GitHub API (for production) or file system (for development)
 */
async function saveContentViaGitHub(
  filePath: string,
  content: string,
  type: string,
  slug: string
): Promise<{ success: boolean; error?: string }> {
  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo = process.env.GITHUB_REPO || "robotwilliams/rw-portfolio";
  const githubBranch = process.env.GITHUB_BRANCH || "main";

  if (!githubToken) {
    return {
      success: false,
      error: "GITHUB_TOKEN environment variable not set",
    };
  }

  try {
    // GitHub API expects the full path from repo root
    // filePath is already in format: content/pages/about.md or content/portfolio/project.md
    const apiPath = filePath;
    const getFileUrl = `https://api.github.com/repos/${githubRepo}/contents/${apiPath}`;

    let fileSha: string | undefined;
    try {
      const getResponse = await fetch(`${getFileUrl}?ref=${githubBranch}`, {
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "rw-portfolio-admin",
        },
      });

      if (getResponse.ok) {
        const fileData = await getResponse.json();
        fileSha = fileData.sha;
      }
    } catch {
      // File doesn't exist yet, that's okay
    }

    // Encode content to base64
    const encodedContent = Buffer.from(content, "utf8").toString("base64");

    // Commit file
      const commitResponse = await fetch(getFileUrl, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${githubToken}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
          "User-Agent": "rw-portfolio-admin",
        },
      body: JSON.stringify({
        message: `Update ${type}: ${slug}`,
        content: encodedContent,
        branch: githubBranch,
        ...(fileSha && { sha: fileSha }),
      }),
    });

    if (!commitResponse.ok) {
      const errorData = await commitResponse.json();
      return {
        success: false,
        error: `GitHub API error: ${errorData.message || "Unknown error"}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * POST /api/admin/save-content
 *
 * Saves markdown content to files. Requires authentication.
 * In production (Vercel), uses GitHub API to commit changes.
 * In development, writes directly to file system.
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
    let filePath: string;
    let relativePath: string;

    if (type === "page") {
      filePath = path.join(process.cwd(), "content", "pages", `${slug}.md`);
      relativePath = `content/pages/${slug}.md`;
    } else if (type === "project") {
      filePath = path.join(process.cwd(), "content", "portfolio", `${slug}.md`);
      relativePath = `content/portfolio/${slug}.md`;
    } else {
      return NextResponse.json(
        { success: false, error: "Invalid type" },
        { status: 400 }
      );
    }

    // Build markdown file with frontmatter
    const frontmatterString = matter.stringify(content, frontmatter || {});

    // Check if we're in production (Vercel) or development
    const isProduction = process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
    const useGitHub = isProduction && process.env.GITHUB_TOKEN;

    if (useGitHub) {
      // Use GitHub API in production
      const result = await saveContentViaGitHub(
        relativePath,
        frontmatterString,
        type,
        slug
      );

      if (!result.success) {
        return NextResponse.json(
          { success: false, error: result.error || "Failed to save via GitHub" },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Content saved. Changes will be deployed automatically.",
      });
    } else {
      // Use file system in development
      try {
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, frontmatterString, "utf8");

        return NextResponse.json({ success: true });
      } catch (error) {
        const errorMessage = error instanceof Error
          ? error.message
          : "Unknown error occurred";

        // Check if it's a filesystem permission error
        if (
          errorMessage.includes("EACCES") ||
          errorMessage.includes("permission") ||
          errorMessage.includes("read-only")
        ) {
          return NextResponse.json(
            {
              success: false,
              error:
                "File system is read-only. Set GITHUB_TOKEN environment variable to enable GitHub API saving.",
            },
            { status: 500 }
          );
        }

        return NextResponse.json(
          {
            success: false,
            error: `Failed to save content: ${errorMessage}`,
          },
          { status: 500 }
        );
      }
    }
  } catch (error) {
    console.error("Error saving content:", error);

    return NextResponse.json(
      {
        success: false,
        error: `Failed to save content: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 }
    );
  }
}
