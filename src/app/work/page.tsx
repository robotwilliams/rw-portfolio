"use client";

import { useProjectWindows } from "@/components/ProjectWindowContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import VintageButton from "@/components/VintageButton";

import { PortfolioProject } from "@/types";

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
            <div className="text-2xl mb-5">⏳</div>
            <h2>
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
            <div className="text-2xl mb-5">❌</div>
            <h2>
              Error Loading Projects
            </h2>
            <p className="text-sm text-[#000000] mb-5">{error}</p>
            <VintageButton
              variant="purple"
              onClick={() => window.location.reload()}
            >
              Try Again
            </VintageButton>
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
        <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4">
          <h1>📁 My Work</h1>
          <p className="text-sm" style={{ color: '#2F4F4F' }}>
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
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, 100px)', justifyContent: 'center' }}>
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
                <Image
                  src={
                    hoveredProject === project.slug
                      ? "/images/rw-site-icon-folder-open.png"
                      : "/images/rw-site-icon-folder-close.png"
                  }
                  alt={`${project.title} folder`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              {/* Project Title */}
              <div className="text-center">
                <h6 className="text-xs font-medium text-center leading-tight text-gray-800">
                  {project.title}
                </h6>
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
            <h3>
              📊 Project Categories
            </h3>
            <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-4">
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
                    <h3>
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
            <h2>
              💼 Ready to Start Your Project?
            </h2>
            <p className="text-sm mb-5 max-w-2xl mx-auto" style={{ color: '#2F4F4F' }}>
              I&apos;m always excited to work on new projects and bring creative
              ideas to life. Let&apos;s discuss how we can work together.
            </p>
            <a href="/contact">
              <VintageButton variant="purple">
                Get In Touch
              </VintageButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
