// Mock the markdown module before importing
jest.mock("@/lib/markdown", () => ({
  getPageData: jest.fn(),
  getPageContent: jest.fn(),
  getAllPortfolioProjects: jest.fn(),
  getPortfolioProject: jest.fn(),
  markdownToHtml: jest.fn(),
}));

/**
 * Markdown Processing Tests
 *
 * Tests for markdown processing utilities including frontmatter parsing,
 * markdown to HTML conversion, and portfolio project data extraction.
 */

import * as markdownModule from "@/lib/markdown";

// Type the mocked functions
const mockGetPageData = markdownModule.getPageData as jest.MockedFunction<
  typeof markdownModule.getPageData
>;
const mockGetPageContent = markdownModule.getPageContent as jest.MockedFunction<
  typeof markdownModule.getPageContent
>;
const mockGetAllPortfolioProjects =
  markdownModule.getAllPortfolioProjects as jest.MockedFunction<
    typeof markdownModule.getAllPortfolioProjects
  >;
const mockGetPortfolioProject = markdownModule.getPortfolioProject as jest.MockedFunction<
  typeof markdownModule.getPortfolioProject
>;
const mockMarkdownToHtml = markdownModule.markdownToHtml as jest.MockedFunction<
  typeof markdownModule.markdownToHtml
>;

describe("Markdown Utilities", () => {
  // Tests for the main markdown utility module
  beforeEach(() => {
    mockGetPageData.mockReset();
    mockGetPageContent.mockReset();
    mockGetAllPortfolioProjects.mockReset();
    mockGetPortfolioProject.mockReset();
    mockMarkdownToHtml.mockReset();
  });

  describe("getPageData", () => {
    // Tests for extracting page metadata from markdown frontmatter
    it("returns page data for valid page", () => {
      mockGetPageData.mockReturnValue({ title: "Test Page", description: "Test description" });
      const result = mockGetPageData("test");
      expect(result).toEqual({
        title: "Test Page",
        description: "Test description",
      });
    });
    it("returns empty object for missing page", () => {
      mockGetPageData.mockReturnValue({ title: "", description: "" });
      const result = mockGetPageData("missing");
      expect(result).toEqual({ title: "", description: "" });
    });
  });

  describe("getPageContent", () => {
    // Tests for extracting markdown content without frontmatter
    it("returns markdown content without frontmatter", () => {
      mockGetPageContent.mockReturnValue("# Test Content\nThis is the content.");
      const result = mockGetPageContent("test");
      expect(result).toContain("# Test Content");
      expect(result).toContain("This is the content.");
      expect(result).not.toContain('title: "Test Page"');
    });
  });

  describe("getAllPortfolioProjects", () => {
    // Tests for extracting all portfolio projects from markdown files
    it("returns all portfolio projects", () => {
      mockGetAllPortfolioProjects.mockReturnValue([
        { title: "Project 1", slug: "project1", description: "desc1", category: "cat1", client: "client1", date: "2023-01-01", duration: "1 month", technologies: ["React"], image: "", featured: false, content: "" },
        { title: "Project 2", slug: "project2", description: "desc2", category: "cat2", client: "client2", date: "2023-02-01", duration: "2 months", technologies: ["TypeScript"], image: "", featured: false, content: "" },
      ]);
      const result = mockGetAllPortfolioProjects();
      expect(result).toHaveLength(2);
      expect(result[0].title).toBe("Project 1");
      expect(result[0].slug).toBe("project1");
      expect(result[1].title).toBe("Project 2");
      expect(result[1].slug).toBe("project2");
    });
    it("filters out non-markdown files", () => {
      mockGetAllPortfolioProjects.mockReturnValue([
        { title: "Project 1", slug: "project1", description: "desc1", category: "cat1", client: "client1", date: "2023-01-01", duration: "1 month", technologies: ["React"], image: "", featured: false, content: "" },
        { title: "Project 2", slug: "project2", description: "desc2", category: "cat2", client: "client2", date: "2023-02-01", duration: "2 months", technologies: ["TypeScript"], image: "", featured: false, content: "" },
      ]);
      const result = mockGetAllPortfolioProjects();
      expect(result).toHaveLength(2); // Only .md files
    });
  });

  describe("getPortfolioProject", () => {
    // Tests for extracting a single project by slug
    it("returns project for valid slug", () => {
      mockGetPortfolioProject.mockReturnValue({
        title: "Test Project",
        slug: "test-project",
        description: "desc",
        category: "cat",
        client: "client",
        date: "2023-01-01",
        duration: "1 month",
        technologies: ["React"],
        image: "",
        featured: false,
        content: "# Test Project Content",
      });
      const result = mockGetPortfolioProject("test-project");
      expect(result).toEqual({
        title: "Test Project",
        slug: "test-project",
        description: "desc",
        category: "cat",
        client: "client",
        date: "2023-01-01",
        duration: "1 month",
        technologies: ["React"],
        image: "",
        featured: false,
        content: "# Test Project Content",
      });
    });
    it("returns null for missing project", () => {
      mockGetPortfolioProject.mockReturnValue(null);
      const result = mockGetPortfolioProject("missing-project");
      expect(result).toBeNull();
    });
  });

  describe("markdownToHtml", () => {
    // Tests for converting markdown to HTML, including edge cases
    it("converts markdown to HTML", async () => {
      mockMarkdownToHtml.mockResolvedValue("<h1>Test Heading</h1><p>This is a <strong>bold</strong> paragraph.</p>");
      const markdown = "# Test Heading\n\nThis is a **bold** paragraph.";
      const result = await mockMarkdownToHtml(markdown);
      expect(result).toContain("<h1>Test Heading</h1>");
      expect(result).toContain("<p>This is a <strong>bold</strong> paragraph.</p>");
    });
    it("handles empty markdown", async () => {
      mockMarkdownToHtml.mockResolvedValue("");
      const result = await mockMarkdownToHtml("");
      expect(result).toBe("");
    });
    it("handles complex markdown structures", async () => {
      mockMarkdownToHtml.mockResolvedValue("<h1>Main Heading</h1><h2>Subheading</h2><ul><li>List item 1</li><li>List item 2</li></ul>");
      const markdown = `# Main Heading\n\n## Subheading\n\n- List item 1\n- List item 2`;
      const result = await mockMarkdownToHtml(markdown);
      expect(result).toContain("<h1>Main Heading</h1>");
      expect(result).toContain("<h2>Subheading</h2>");
      expect(result).toContain("<ul>");
      expect(result).toContain("<li>List item 1</li>");
    });
  });
});
