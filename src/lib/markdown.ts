import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

/**
 * Content Directory Configuration
 *
 * Defines the base directory where all markdown content is stored.
 * This is the root of the markdown-based CMS system.
 */
const contentDirectory = path.join(process.cwd(), "content");

import { PageData, PortfolioProject, ProjectImage } from "@/types";

/**
 * Transform Gallery Data
 *
 * Converts gallery data from frontmatter format to ProjectImage format.
 * Handles both the old string[] format and the new ProjectImage[] format.
 *
 * @param gallery - Gallery data from frontmatter
 * @returns Array of ProjectImage objects
 */
function transformGalleryData(gallery: unknown): ProjectImage[] {
  if (!gallery || !Array.isArray(gallery)) {
    return [];
  }

  // If it's already in the correct format, return as-is
  if (gallery.length > 0 && typeof gallery[0] === 'object' && gallery[0].src) {
    return gallery as ProjectImage[];
  }

  // Convert from string[] format to ProjectImage[] format
  return gallery.map((imagePath: string, index: number) => ({
    src: imagePath,
    alt: `Project Image ${index + 1}`,
    width: 1200,
    height: 900,
  }));
}

/**
 * Get Page Data
 *
 * Extracts metadata from a markdown file's frontmatter.
 * This function is used to get page titles, descriptions, and other
 * metadata without loading the full content.
 *
 * @param pageName - The name of the page file (without .md extension)
 * @returns PageData object containing frontmatter metadata
 */
export function getPageData(pageName: string): PageData {
  const fullPath = path.join(contentDirectory, "pages", `${pageName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return data as PageData;
}

/**
 * Get Page Content
 *
 * Extracts the markdown content from a page file, excluding frontmatter.
 * This function is used when you need the raw markdown content for
 * processing or conversion to HTML.
 *
 * @param pageName - The name of the page file (without .md extension)
 * @returns Raw markdown content as a string
 */
export function getPageContent(pageName: string): string {
  const fullPath = path.join(contentDirectory, "pages", `${pageName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);

  return content;
}

/**
 * Get All Portfolio Projects
 *
 * Loads all portfolio project files from the content/portfolio directory
 * and returns them as an array of PortfolioProject objects. Projects are
 * sorted by date (newest first) for consistent display order.
 *
 * This function is used by the work page to display the interactive
 * project grid with Windows 98-style icons. The project data is served
 * through an API route to enable client-side rendering of the project
 * windows system.
 *
 * @returns Array of PortfolioProject objects, sorted by date
 */
export function getAllPortfolioProjects(): PortfolioProject[] {
  const portfolioDirectory = path.join(contentDirectory, "portfolio");
  const fileNames = fs.readdirSync(portfolioDirectory);

  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(portfolioDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || fileName.replace(/\.md$/, ""), // Use frontmatter slug or fallback to filename
        content,
        ...data,
        gallery: transformGalleryData(data.gallery),
      } as PortfolioProject;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return allProjectsData;
}

/**
 * Get Portfolio Project by Slug
 *
 * Loads a specific portfolio project by its slug (filename without extension).
 * This function is used by the project window system to display detailed
 * project information when users click on project icons in the work grid.
 *
 * @param slug - The project slug (filename without .md extension)
 * @returns PortfolioProject object or null if not found
 */
export function getPortfolioProject(slug: string): PortfolioProject | null {
  try {
    const fullPath = path.join(contentDirectory, "portfolio", `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data,
      gallery: transformGalleryData(data.gallery),
    } as PortfolioProject;
  } catch {
    return null;
  }
}

/**
 * Get Featured Projects
 *
 * Filters the portfolio projects to return only those marked as featured.
 * This function is used by the home page to display a curated selection
 * of the best projects.
 *
 * @returns Array of featured PortfolioProject objects
 */
export function getFeaturedProjects(): PortfolioProject[] {
  const allProjects = getAllPortfolioProjects();
  return allProjects.filter((project) => project.featured);
}

/**
 * Convert Markdown to HTML
 *
 * Converts markdown content to HTML using the remark processor.
 * This function is used by API routes to serve pre-rendered HTML
 * content to the frontend components, particularly for project windows
 * that display detailed project content within the Windows 98 interface.
 *
 * The remark processor is configured to handle standard markdown
 * syntax and convert it to clean HTML that can be safely rendered
 * in the browser with Windows 98 styling.
 *
 * @param markdown - Raw markdown content as a string
 * @returns Promise that resolves to HTML string
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
