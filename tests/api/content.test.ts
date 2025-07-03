/**
 * API Content Tests
 *
 * Tests for API routes that handle content delivery and markdown processing.
 * Covers all API endpoints and their response formats.
 */

import { NextRequest } from "next/server";
import { GET } from "@/app/api/content/[page]";
import { getAllPortfolioProjects } from "@/lib/markdown";

// Mock the markdown utility
jest.mock("@/lib/markdown", () => ({
  getAllPortfolioProjects: jest.fn(),
}));

const mockGetAllPortfolioProjects =
  getAllPortfolioProjects as jest.MockedFunction<
    typeof getAllPortfolioProjects
  >;

describe("Content API Route", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("GET /api/content/[page]", () => {
    it("should return HTML content for valid pages", async () => {
      // Mock file system operations
      const mockReadFileSync = jest.spyOn(require("fs"), "readFileSync");
      const mockExistsSync = jest.spyOn(require("fs"), "existsSync");

      mockExistsSync.mockReturnValue(true);
      mockReadFileSync.mockReturnValue(
        '---\ntitle: "Test Page"\n---\n# Test Content\nThis is test content.'
      );

      const request = new NextRequest(
        "http://localhost:3000/api/content/about"
      );
      const response = await GET(request, { params: { page: "about" } });

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.html).toContain("<h1>Test Content</h1>");

      mockReadFileSync.mockRestore();
      mockExistsSync.mockRestore();
    });

    it("should return 404 for invalid pages", async () => {
      const request = new NextRequest(
        "http://localhost:3000/api/content/invalid"
      );
      const response = await GET(request, { params: { page: "invalid" } });

      expect(response.status).toBe(404);
      const data = await response.json();
      expect(data.error).toBe("Not found");
    });

    it("should return 404 for non-existent files", async () => {
      const mockExistsSync = jest.spyOn(require("fs"), "existsSync");
      mockExistsSync.mockReturnValue(false);

      const request = new NextRequest(
        "http://localhost:3000/api/content/about"
      );
      const response = await GET(request, { params: { page: "about" } });

      expect(response.status).toBe(404);
      const data = await response.json();
      expect(data.error).toBe("Not found");

      mockExistsSync.mockRestore();
    });

    it("should return 500 for file processing errors", async () => {
      const mockReadFileSync = jest.spyOn(require("fs"), "readFileSync");
      const mockExistsSync = jest.spyOn(require("fs"), "existsSync");

      mockExistsSync.mockReturnValue(true);
      mockReadFileSync.mockImplementation(() => {
        throw new Error("File read error");
      });

      const request = new NextRequest(
        "http://localhost:3000/api/content/about"
      );
      const response = await GET(request, { params: { page: "about" } });

      expect(response.status).toBe(500);
      const data = await response.json();
      expect(data.error).toBe("Internal server error");

      mockReadFileSync.mockRestore();
      mockExistsSync.mockRestore();
    });
  });

  describe("Projects API", () => {
    it("should return projects data", async () => {
      const mockProjects = [
        {
          slug: "test-project",
          title: "Test Project",
          description: "A test project",
          category: "Web Development",
          client: "Test Client",
          date: "2024-01-01",
          duration: "2 months",
          technologies: ["React", "TypeScript"],
          image: "/images/test-project.jpg",
          featured: true,
          content: "# Test Project\nThis is a test project.",
        },
      ];

      mockGetAllPortfolioProjects.mockReturnValue(mockProjects);

      // Import the projects route dynamically
      const { GET: getProjects } = await import(
        "@/app/api/content/projects/route"
      );
      const response = await getProjects();

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.success).toBe(true);
      expect(data.data).toEqual(mockProjects);
    });

    it("should handle errors when fetching projects", async () => {
      mockGetAllPortfolioProjects.mockImplementation(() => {
        throw new Error("Database error");
      });

      const { GET: getProjects } = await import(
        "@/app/api/content/projects/route"
      );
      const response = await getProjects();

      expect(response.status).toBe(500);
      const data = await response.json();
      expect(data.success).toBe(false);
      expect(data.error).toBe("Failed to fetch projects");
    });

    it("should return featured projects", async () => {
      const mockProjects = [
        {
          slug: "featured-1",
          title: "Featured Project 1",
          description: "First featured project",
          category: "Web Development",
          client: "Client 1",
          date: "2024-01-01",
          duration: "3 months",
          technologies: ["React", "TypeScript"],
          image: "/images/featured-1.jpg",
          featured: true,
          content: "# Featured 1",
        },
        {
          slug: "featured-2",
          title: "Featured Project 2",
          description: "Second featured project",
          category: "Design",
          client: "Client 2",
          date: "2024-02-01",
          duration: "1 month",
          technologies: ["Figma", "Photoshop"],
          image: "/images/featured-2.jpg",
          featured: true,
          content: "# Featured 2",
        },
        {
          slug: "regular",
          title: "Regular Project",
          description: "Regular project",
          category: "Development",
          client: "Client 3",
          date: "2024-03-01",
          duration: "2 weeks",
          technologies: ["JavaScript", "CSS"],
          image: "/images/regular.jpg",
          featured: false,
          content: "# Regular",
        },
      ];

      mockGetAllPortfolioProjects.mockReturnValue(mockProjects);

      const { GET: getProjects } = await import(
        "@/app/api/content/projects/route"
      );
      const response = await getProjects();

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.data.filter((p: any) => p.featured)).toHaveLength(2);
    });

    it("should return all projects when no featured filter", async () => {
      const mockProjects = [
        {
          slug: "project-1",
          title: "Project 1",
          description: "First project",
          category: "Development",
          client: "Client A",
          date: "2024-01-15",
          duration: "1 month",
          technologies: ["JavaScript", "HTML"],
          image: "/images/project-1.jpg",
          featured: false,
          content: "# Project 1",
        },
        {
          slug: "project-2",
          title: "Project 2",
          description: "Second project",
          category: "Design",
          client: "Client B",
          date: "2024-02-15",
          duration: "2 weeks",
          technologies: ["CSS", "Illustrator"],
          image: "/images/project-2.jpg",
          featured: false,
          content: "# Project 2",
        },
      ];

      mockGetAllPortfolioProjects.mockReturnValue(mockProjects);

      const { GET: getProjects } = await import(
        "@/app/api/content/projects/route"
      );
      const response = await getProjects();

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.data).toHaveLength(2);
    });

    it("should handle empty projects list", async () => {
      mockGetAllPortfolioProjects.mockReturnValue([]);

      const { GET: getProjects } = await import(
        "@/app/api/content/projects/route"
      );
      const response = await getProjects();

      expect(response.status).toBe(200);
      const data = await response.json();
      expect(data.data).toEqual([]);
    });
  });
});
