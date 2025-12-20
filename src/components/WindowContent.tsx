"use client";
import { PortfolioProject, WindowContentProps } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import PageLayout, {
  ContentSection,
  InfoCard,
} from "./PageLayout";
import ProjectWindow from "./ProjectWindow";
import VintageButton from "./VintageButton";

// Loads content for different pages - work page has its own window system, others use markdown
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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // State for other pages
  const [html, setHtml] = useState<string>("");
  const [otherPageError, setOtherPageError] = useState<string | null>(null);

  // Fetch projects for work page
  const loadWorkPage = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Add cache-busting to ensure fresh content after admin updates
      const response = await fetch(`/api/content/projects?t=${Date.now()}`, {
        cache: "no-store",
      });
      const result = await response.json();

      if (result.success) {
        setProjects(result.data);
      } else {
        setError(result.error || "Failed to fetch projects");
      }
    } catch (err) {
      setError("Failed to fetch projects");
      if (process.env.NODE_ENV === "development") {
        console.error("Error fetching projects:", err);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch markdown content for other pages
  const loadOtherPage = useCallback(async () => {
    try {
      setOtherPageError(null);

      // Add cache-busting to ensure fresh content after admin updates
      const response = await fetch(`/api/content/${page}?t=${Date.now()}`, {
        cache: "no-store",
      });
      if (!response.ok) throw new Error("Not found");

      const data = await response.json();
      setHtml(data.html);
    } catch (err) {
      setOtherPageError("Failed to load content");
      if (process.env.NODE_ENV === "development") {
        console.error("Error loading content:", err);
      }
    }
  }, [page]);

  // Load content based on page type
  // Only load markdown content for "about" and "contact" pages
  // "home" is the desktop interface itself, not a content page
  useEffect(() => {
    if (page === "work") {
      loadWorkPage();
    } else if (page === "about" || page === "contact") {
      loadOtherPage();
    }
    // Note: "home" doesn't need content loading - it's the desktop interface
  }, [page, loadWorkPage, loadOtherPage]);

  /**
   * Work Page Window Management
   */
  const openProjectWindow = (project: PortfolioProject) => {
    setOpenWindows({});
    const windowId = project.slug;
    const screenWidth = window.innerWidth;

    // Calculate responsive window size
    let windowWidth = 850;
    if (screenWidth <= 600) {
      // Mobile: use responsive width
      if (screenWidth <= 360) windowWidth = 280;
      else if (screenWidth <= 480) windowWidth = 320;
      else windowWidth = 400;
    }

    // Always center the window
    const x = Math.max(0, (window.innerWidth - windowWidth) / 2);
    const y = Math.max(0, (window.innerHeight - 550 - 80) / 2); // Account for taskbar

    setOpenWindows({
      [windowId]: {
        project,
        position: { x, y },
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

  // Render other pages using markdown content from API
  // Note: "home" is the desktop interface itself, not a content page
  if (page === "about" || page === "contact") {
    const pageConfig = {
      about: {
        title: "🤖 About Robot Williams",
        description: "Learn more about Rob Williams, Frontend Maker and creative developer.",
        icon: "/images/rw-logo.png",
      },
      contact: {
        title: "📠 Say Hello",
        description: "Get in touch with Rob Williams for your next project.",
        icon: "/images/rw-site-icon-folder-closed-contact.png",
      },
    };

    const config = pageConfig[page];

    return (
      <PageLayout
        page={page}
        title={config.title}
        description={config.description}
        icon={config.icon}
        error={otherPageError}
        onRetry={loadOtherPage}
      >
        {/* Google Map for contact page - appears between description and content */}
        {page === "contact" && (
          <div className="mb-8">
            <div className="bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] p-4 mb-4">
              <h2 className="text-lg font-bold mb-4">📍 Location</h2>
              <div className="bg-[#ffffff] border border-[#808080] p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.5!2d-122.3493!3d47.6205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154f4f66dd1d%3A0x385b22aac5770c0!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&q=Space+Needle+Seattle+WA"
                  width="100%"
                  height="450"
                  style={{ border: "2px solid #808080", minHeight: "450px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Seattle Space Needle Location"
                />
              </div>
              <p className="text-sm mt-3" style={{ color: '#2F4F4F' }}>
                Located in Seattle, Washington - near the Space Needle
              </p>
            </div>
          </div>
        )}

        {/* Display markdown content from API - this is what gets edited in admin */}
        {html ? (
          <div
            className="prose prose-sm max-w-none"
            style={
              {
                "--tw-prose-body": "#0077AA",
                "--tw-prose-headings": "#000080",
                "--tw-prose-links": "#000080",
              } as React.CSSProperties
            }
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <div className="text-center text-gray-500">Loading content...</div>
        )}
      </PageLayout>
    );
  }

  // Render work page
  if (page === "work") {
    // Loading state
    if (loading) {
      return (
        <div className="text-center">
          <p>Loading...</p>
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className="text-center">
          <div className="text-2xl mb-5">❌</div>
          <h2 className="text-lg font-bold">
            Error Loading Projects
          </h2>
          <p className="text-sm text-[#000000] mb-5">{error}</p>
          <VintageButton
            variant="purple"
            onClick={loadWorkPage}
          >
            Try Again
          </VintageButton>
        </div>
      );
    }

    // Extract categories
    const categories = Array.from(
      new Set(projects.map((project) => project.category))
    );

    return (
      <PageLayout
        page="work"
        title={<>✏️My Work</>}
        description="Click on any project icon to open it in a window. A collection of projects that showcase my skills in web development, design, and creative problem-solving."
        icon="/images/rw-site-icon-folder-close.png"
      >
        {/* Projects Grid */}
        <ContentSection title="Projects" icon="📁">
          <div className="grid gap-2" style={{
            gridTemplateColumns: window.innerWidth <= 600
              ? 'repeat(auto-fill, minmax(140px, 160px))' // Bigger on mobile
              : 'repeat(auto-fill, minmax(100px, 120px))', // Original size on desktop
            justifyContent: 'start',
            maxWidth: '100%',
            overflow: 'hidden'
          }}>
            {projects.map((project) => (
              <button
                key={project.slug}
                onClick={() => openProjectWindow(project)}
                className="window-icon"
                onMouseEnter={() => setHoveredProject(project.slug)}
                onMouseLeave={() => setHoveredProject(null)}
                style={{ minWidth: '0', maxWidth: '120px' }}
              >
                {/* Project Icon */}
                <div className="mb-3">
                  <Image
                    src={
                      hoveredProject === project.slug
                        ? "/images/rw-site-icon-folder-open.png"
                        : "/images/rw-site-icon-folder-close.png"
                    }
                    alt="Project folder"
                    width={window.innerWidth <= 600 ? 72 : 56} // Bigger on mobile
                    height={window.innerWidth <= 600 ? 72 : 56} // Bigger on mobile
                    className="object-contain"
                  />
                </div>

                {/* Project Title */}
                <div className="text-center space-y-1" style={{ width: '100%', maxWidth: '100%' }}>
                  <span className="text-xs font-medium text-center leading-tight truncate block text-teal" style={{
                    fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", "Arial", sans-serif',
                    fontSize: window.innerWidth <= 600 ? '15px' : '13px', // Bigger on mobile
                    textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto'
                  }} title={project.title}>
                    {project.title}
                  </span>
                  {project.featured && (
                    <span className="text-xs" style={{
                      color: '#ff0000',
                      fontFamily: '"MS Sans Serif", "Microsoft Sans Serif", "Arial", sans-serif',
                      fontSize: '11px',
                      textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'
                    }}>★ Featured</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </ContentSection>

        {/* Categories Summary */}
        <ContentSection title="Project Categories" icon="📊" headingLevel={3}>
          <div className="flex flex-wrap gap-3 mb-5">
            {categories.map((category) => {
              const categoryProjects = projects.filter(
                (project) => project.category === category
              );
              return (
                <div key={category} style={{ minWidth: '200px', flex: '1 1 200px' }}>
                  <InfoCard title={category}>
                    {categoryProjects.length} projects
                  </InfoCard>
                </div>
              );
            })}
          </div>
        </ContentSection>

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
      </PageLayout>
    );
  }

  // Fallback for home page (desktop interface) - no content needed
  // This should rarely be reached since home is handled by RetroDesktop
  return (
    <div className="text-center text-gray-500 p-8">
      <p>Welcome to the desktop interface</p>
    </div>
  );
}
