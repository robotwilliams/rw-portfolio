import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export async function GET() {
  const filePath = path.join(process.cwd(), "content/pages", "contact.md");
  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const file = fs.readFileSync(filePath, "utf8");
  const { content } = matter(file);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();
  return NextResponse.json({ html: htmlContent });
}
