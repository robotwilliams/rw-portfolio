import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Disable Next.js caching for this route to ensure fresh content
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const filePath = path.join(process.cwd(), "content/pages", "about.md");
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const file = fs.readFileSync(filePath, "utf8");
  const { content } = matter(file);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();
  // Disable caching to ensure admin updates are immediately visible
  return NextResponse.json(
    { html: htmlContent },
    {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
        "Pragma": "no-cache",
      },
    }
  );
}
