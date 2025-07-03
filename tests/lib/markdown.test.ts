/**
 * Markdown Utility Tests
 *
 * Tests for markdown processing utilities that handle content conversion
 * and file system operations. Covers all markdown-related functionality.
 */

import {
  getPageData,
  getPageContent,
  getAllPortfolioProjects,
  getPortfolioProject,
  markdownToHtml,
} from "@/lib/markdown";
import {
  mockProjects,
  mockPageData,
  mockMarkdownContent,
} from "../__mocks__/markdown";

// Mock fs and path modules
jest.mock("fs", () => ({
  readFileSync: jest.fn(),
  readdirSync: jest.fn(),
  existsSync: jest.fn(),
}));

jest.mock("path", () => ({
  join: jest.fn(),
}));

const fs = require("fs");
const path = require("path");

describe("Markdown Utilities", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("getPageData", () => {
    it("returns page data for valid page", () => {
      const mockContent = `---
title: "Test Page"
description: "Test description"
---
# Content`;

      fs.readFileSync.mockReturnValue(mockContent);
      path.join.mockReturnValue("/mock/path");

      const result = getPageData("test");

      expect(result).toEqual({
        title: "Test Page",
        description: "Test description",
      });
    });

    it("returns empty object for missing page", () => {
      fs.readFileSync.mockImplementation(() => {
        throw new Error("File not found");
      });
      path.join.mockReturnValue("/mock/path");

      const result = getPageData("missing");

      expect(result).toEqual({});
    });
  });

  describe("getPageContent", () => {
    it("returns markdown content without frontmatter", () => {
      const mockContent = `---
title: "Test Page"
---
# Test Content
This is the content.`;

      fs.readFileSync.mockReturnValue(mockContent);
      path.join.mockReturnValue("/mock/path");

      const result = getPageContent("test");

      expect(result).toContain("# Test Content");
      expect(result).toContain("This is the content.");
      expect(result).not.toContain('title: "Test Page"');
    });
  });

  describe("getAllPortfolioProjects", () => {
    it("returns all portfolio projects", () => {
      const mockFiles = ["project1.md", "project2.md"];
      const mockContent1 = `---
title: "Project 1"
slug: "project1"
---
# Project 1 Content`;

      const mockContent2 = `---
title: "Project 2"
slug: "project2"
---
# Project 2 Content`;

      fs.readdirSync.mockReturnValue(mockFiles);
      fs.readFileSync
        .mockReturnValueOnce(mockContent1)
        .mockReturnValueOnce(mockContent2);
      path.join.mockReturnValue("/mock/path");

      const result = getAllPortfolioProjects();

      expect(result).toHaveLength(2);
      expect(result[0].title).toBe("Project 1");
      expect(result[0].slug).toBe("project1");
      expect(result[1].title).toBe("Project 2");
      expect(result[1].slug).toBe("project2");
    });

    it("filters out non-markdown files", () => {
      const mockFiles = ["project1.md", "image.jpg", "project2.md"];

      fs.readdirSync.mockReturnValue(mockFiles);
      path.join.mockReturnValue("/mock/path");

      const result = getAllPortfolioProjects();

      expect(result).toHaveLength(2); // Only .md files
    });
  });

  describe("getPortfolioProject", () => {
    it("returns project for valid slug", () => {
      const mockContent = `---
title: "Test Project"
slug: "test-project"
---
# Test Project Content`;

      fs.readFileSync.mockReturnValue(mockContent);
      path.join.mockReturnValue("/mock/path");

      const result = getPortfolioProject("test-project");

      expect(result).toEqual({
        title: "Test Project",
        slug: "test-project",
        content: "# Test Project Content",
      });
    });

    it("returns null for missing project", () => {
      fs.readFileSync.mockImplementation(() => {
        throw new Error("File not found");
      });
      path.join.mockReturnValue("/mock/path");

      const result = getPortfolioProject("missing-project");

      expect(result).toBeNull();
    });
  });

  describe("markdownToHtml", () => {
    it("converts markdown to HTML", async () => {
      const markdown = "# Test Heading\n\nThis is a **bold** paragraph.";

      const result = await markdownToHtml(markdown);

      expect(result).toContain("<h1>Test Heading</h1>");
      expect(result).toContain(
        "<p>This is a <strong>bold</strong> paragraph.</p>"
      );
    });

    it("handles empty markdown", async () => {
      const result = await markdownToHtml("");

      expect(result).toBe("");
    });

    it("handles complex markdown structures", async () => {
      const markdown = `
# Main Heading

## Subheading

- List item 1
- List item 2

\`\`\`javascript
console.log('code block');
\`\`\`

[Link text](https://example.com)
      `;

      const result = await markdownToHtml(markdown);

      expect(result).toContain("<h1>Main Heading</h1>");
      expect(result).toContain("<h2>Subheading</h2>");
      expect(result).toContain("<ul>");
      expect(result).toContain("<li>List item 1</li>");
      expect(result).toContain('<pre><code class="language-javascript">');
      expect(result).toContain('<a href="https://example.com">Link text</a>');
    });
  });
});
