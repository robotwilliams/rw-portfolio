"use client";

import { useState, useEffect } from "react";
import { useProjectWindows } from "@/components/ProjectWindowContext";

interface PortfolioProject {
  slug: string;
  title: string;
  description: string;
  client: string;
  duration: string;
  date: string;
  category: string;
  technologies: string[];
  live_url?: string;
  github_url?: string;
  gallery?: string[];
  content: string;
  featured?: boolean;
}

/**
 * Work Page Component
 *
 * This page displays all portfolio projects in a Windows 98-style grid layout with:
 * - Project icons representing each project
 * - Project cards showing key information
 * - Technology tags for each project
 * - Category filtering and organization
 * - Windows 98-style popup windows for each project
 *
 * The page fetches all projects from the API and displays them sorted by date (newest first).
 * Each project can be opened in its own draggable window.
 */
export default function WorkPage() {
  // State for projects and loading
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Use the global project window context
  const { openProjectWindow } = useProjectWindows();

  // Fetch projects on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/content/projects");
        const result = await response.json();

        if (result.success) {
          setProjects(result.data);
        } else {
          setError(result.error || "Failed to fetch projects");
        }
      } catch (err) {
        setError("Failed to fetch projects");
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Extract unique categories for filtering and display
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#c0c0c0] p-4 flex items-center justify-center">
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-8">
          <div className="text-center">
            <div className="text-2xl mb-4">⏳</div>
            <h2 className="text-lg font-bold text-[#000080] mb-2">
              Loading Projects...
            </h2>
            <p className="text-sm text-[#000000]">
              Please wait while we load your portfolio.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#c0c0c0] p-4 flex items-center justify-center">
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-8">
          <div className="text-center">
            <div className="text-2xl mb-4">❌</div>
            <h2 className="text-lg font-bold text-[#000080] mb-2">
              Error Loading Projects
            </h2>
            <p className="text-sm text-[#000000] mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold hover:bg-[#d4d0c8] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#c0c0c0] p-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* 
          Page Header - Windows 98 Style
          Main title and description that introduces the portfolio
          with classic Windows 98 styling.
        */}
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-6">
          <h1 className="text-2xl font-bold text-[#000080] mb-2">📁 My Work</h1>
          <p className="text-[#000000] text-sm">
            Click on any project icon to open it in a window. A collection of
            projects that showcase my skills in web development, design, and
            creative problem-solving.
          </p>
        </div>

        {/* 
          Projects Grid - Windows 98 Desktop Style
          Displays all projects as desktop icons in a grid layout.
          Each project icon contains:
          - Project icon representation
          - Project title
          - Category information
          - Click to open in window
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {projects.map((project) => (
            <button
              key={project.slug}
              onClick={() => openProjectWindow(project)}
              className="project-icon"
              onMouseEnter={() => setHoveredProject(project.slug)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Icon */}
              <div className="flex justify-center mb-2">
                <img
                  src={
                    hoveredProject === project.slug
                      ? "/images/rw-site-icon-folder-open.png"
                      : "/images/rw-site-icon-folder-close.png"
                  }
                  alt={`${project.title} folder`}
                  className="w-16 h-16 object-contain"
                />
              </div>
              {/* Project Title */}
              <div className="text-center">
                <h3 className="text-xs font-medium text-center leading-tight">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="text-xs text-[#ff0000]">★ Featured</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* 
          Categories Summary - Windows 98 Style
          Shows a breakdown of project categories with counts.
          Helps visitors understand the range of work and expertise areas.
        */}
        <div className="mt-8">
          <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
            <h2 className="text-lg font-bold text-[#000080] mb-4">
              📊 Project Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
                // Count projects in each category
                const categoryProjects = projects.filter(
                  (project) => project.category === category
                );
                return (
                  <div
                    key={category}
                    className="bg-[#ffffff] border border-[#808080] p-3"
                  >
                    <h3 className="text-sm font-semibold text-[#000000] mb-1">
                      {category}
                    </h3>
                    <p className="text-xs text-[#808080]">
                      {categoryProjects.length} projects
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 
          Call-to-Action Section - Windows 98 Style
          Encourages visitors to start a project or get in touch.
          Uses classic Windows 98 button styling.
        */}
        <div className="mt-8 text-center">
          <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-6">
            <h2 className="text-lg font-bold text-[#000080] mb-3">
              💼 Ready to Start Your Project?
            </h2>
            <p className="text-[#000000] text-sm mb-4 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and bring creative
              ideas to life. Let&apos;s discuss how we can work together.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold hover:bg-[#d4d0c8] transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

