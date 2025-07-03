"use client";
import { useEffect, useState } from "react";
import PixelIcon from "./PixelIcon";
import ProjectWindow from "./ProjectWindow";
import RetroLoading from "./RetroLoading";

/**
 * WindowContent Component Props
 *
 * Defines the props for the WindowContent component which loads
 * different content based on the current page/route.
 */
interface WindowContentProps {
  page: "home" | "about" | "work" | "contact"; // The page content to load
}

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
 * WindowContent Component
 *
 * This component dynamically loads content for different pages within
 * the desktop windows. It provides:
 *
 * For Work Page:
 * - Interactive project grid with RobotOS-style icons
 * - Clickable project icons that open detailed project windows
 * - Window management system (open, close, drag, activate)
 * - Project categories and metadata display
 *
 * For Other Pages:
 * - Markdown content rendering from API routes
 * - Loading and error states
 * - Consistent RobotOS styling
 *
 * The component integrates with the RetroDesktop system to provide
 * a seamless RobotOS-style desktop experience where all content
 * opens within windows rather than navigating to new pages.
 */
export default function WindowContent({ page }: WindowContentProps) {
  // State for work page
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Window management state for work page
  const [openWindows, setOpenWindows] = useState<{
    [key: string]: {
      project: PortfolioProject;
      position: { x: number; y: number };
      isActive: boolean;
    };
  }>({});
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  // State for other pages
  const [html, setHtml] = useState<string>("");
  const [otherPageLoading, setOtherPageLoading] = useState(true);
  const [otherPageError, setOtherPageError] = useState<string | null>(null);

  /**
   * Load Content Effect
   *
   * Handles different content loading based on the page type.
   */
  useEffect(() => {
    if (page === "work") {
      loadWorkPage();
    } else {
      loadOtherPage();
    }
  }, [page]);

  /**
   * Load Work Page Content
   *
   * Fetches projects and sets up the interactive work page.
   */
  const loadWorkPage = async () => {
    try {
      setLoading(true);
      setError(null);

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

  /**
   * Load Other Page Content
   *
   * Fetches markdown content for non-work pages.
   */
  const loadOtherPage = async () => {
    try {
      setOtherPageLoading(true);
      setOtherPageError(null);

      const response = await fetch(`/api/content/${page}`);
      if (!response.ok) throw new Error("Not found");

      const data = await response.json();
      setHtml(data.html);
    } catch (err) {
      setOtherPageError("Failed to load content");
      console.error("Error loading content:", err);
    } finally {
      setOtherPageLoading(false);
    }
  };

  /**
   * Work Page Window Management
   */
  const openProjectWindow = (project: PortfolioProject) => {
    // Close any existing windows
    setOpenWindows({});

    // Open new window
    const windowId = project.slug;
    setOpenWindows({
      [windowId]: {
        project,
        position: { x: 100, y: 100 },
        isActive: true,
      },
    });
    setActiveWindow(windowId);
  };

  const closeProjectWindow = (windowId: string) => {
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      delete newWindows[windowId];
      return newWindows;
    });
    if (activeWindow === windowId) {
      setActiveWindow(null);
    }
  };

  const activateWindow = (windowId: string) => {
    setActiveWindow(windowId);
    setOpenWindows((prev) => {
      const newWindows = { ...prev };
      Object.keys(newWindows).forEach((id) => {
        newWindows[id].isActive = id === windowId;
      });
      return newWindows;
    });
  };

  const moveWindow = (windowId: string, x: number, y: number) => {
    setOpenWindows((prev) => ({
      ...prev,
      [windowId]: {
        ...prev[windowId],
        position: { x, y },
      },
    }));
  };

  /**
   * Get Project Icon
   */
  const getProjectIcon = (): string => {
    return "folder";
  };

  // Render work page
  if (page === "work") {
    // Loading state
    if (loading) {
      return (
        <div className="p-8">
          <RetroLoading
            messages={[
              "$ cd /portfolio",
              "$ ls -la",
              "[OK] Found 6 project files",
              "$ cat projects.json",
              "[OK] Loading project metadata...",
              "$ npm install nostalgia",
              "[OK] RobotOS compatibility installed",
              "",
              "    [ROBOT] Scanning project files...",
              "    [ROBOT] Found 6 portfolio entries",
              "    [ROBOT] Loading pixel art assets...",
              "    [ROBOT] Ready to display projects! 🤖",
              "",
              "$ echo 'Projects loaded successfully'",
              "Projects loaded successfully",
            ]}
            duration={3000}
          />
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className="p-8 text-center">
          <div className="text-2xl mb-4">❌</div>
          <h2 className="text-lg font-bold text-[#000080] mb-2">
            Error Loading Projects
          </h2>
          <p className="text-sm text-[#000000] mb-4">{error}</p>
          <button
            onClick={loadWorkPage}
            className="px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold hover:bg-[#d4d0c8] transition-colors"
          >
            Try Again
          </button>
        </div>
      );
    }

    // Extract categories
    const categories = Array.from(
      new Set(projects.map((project) => project.category))
    );

    return (
      <div className="relative">
        {/* Work Page Content */}
        <div className="p-6">
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#000080] mb-2">
              📁 My Work
            </h1>
            <p className="text-[#000000] text-sm">
              Click on any project icon to open it in a window. A collection of
              projects that showcase my skills in web development, design, and
              creative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-8">
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => openProjectWindow(project)}
                className="window-icon"
              >
                {/* Project Icon */}
                <div className="mb-2">
                  <PixelIcon icon={getProjectIcon()} size={48} />
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

          {/* Categories Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-[#000080] mb-4">
              📊 Project Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((category) => {
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

        {/* Project Windows */}
        {Object.entries(openWindows).map(([windowId, windowData]) => (
          <ProjectWindow
            key={windowId}
            project={windowData.project}
            onClose={() => closeProjectWindow(windowId)}
            isActive={windowData.isActive}
            onActivate={() => activateWindow(windowId)}
            position={windowData.position}
            onMove={(x, y) => moveWindow(windowId, x, y)}
          />
        ))}
      </div>
    );
  }

  // Render other pages
  if (otherPageLoading) {
    return (
      <div className="p-8">
        <RetroLoading
          messages={[
            "$ cd /content",
            "$ find . -name '*.md'",
            "[OK] Found markdown files",
            "$ pandoc content.md -o content.html",
            "[OK] Markdown converted to HTML",
            "$ cp retro-styles.css /tmp/",
            "[OK] RobotOS styling applied",
            "",
            "    [ROBOT] Content processed successfully",
            "    [ROBOT] Styling applied with retro flair",
            "    [ROBOT] Ready to display! 🤖",
            "",
            "$ echo 'Content ready for display!'",
            "Content ready for display!",
          ]}
          duration={2500}
        />
      </div>
    );
  }

  if (otherPageError) {
    return <div className="p-8 text-center text-red-600">{otherPageError}</div>;
  }

  return (
    <div
      className="prose max-w-none p-6"
      style={
        {
          "--tw-prose-body": "#000000",
          "--tw-prose-headings": "#000080",
          "--tw-prose-links": "#000080",
        } as React.CSSProperties
      }
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
