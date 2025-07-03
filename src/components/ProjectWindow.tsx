/**
 * ProjectWindow Component
 *
 * A draggable RobotOS-style window that displays detailed project information.
 * This component is used within the work page to show individual project details
 * when users click on project icons in the main work grid.
 *
 * Features:
 * - Authentic RobotOS window styling with title bar and controls
 * - Draggable window that can be moved around the screen
 * - Window activation and z-index management
 * - Project content rendering with markdown-to-HTML conversion
 * - Project metadata display (client, duration, date, technologies)
 * - Live site and GitHub links when available
 * - Gallery display for project images
 * - Close button to dismiss the window
 *
 * The window integrates with the parent component's window management system
 * to ensure only one project window is open at a time and proper window
 * stacking behavior.
 */

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PixelIcon from "./PixelIcon";

interface ProjectWindowProps {
  project: {
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
  };
  onClose: () => void;
  isActive?: boolean;
  onActivate?: () => void;
  position?: { x: number; y: number };
  onMove?: (x: number, y: number) => void;
}

export default function ProjectWindow({
  project,
  onClose,
  isActive = false,
  onActivate,
  position: externalPosition,
  onMove,
}: ProjectWindowProps) {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState(() => {
    // Use external position if provided, otherwise calculate default
    if (externalPosition) {
      return externalPosition;
    }

    // Use exact same size and positioning as work window
    const getResponsiveWindowSize = () => {
      const screenWidth = window.innerWidth;

      const baseWidth = 850;
      const baseHeight = 650;

      if (screenWidth < 1200) {
        const scale = Math.max(0.4, screenWidth / 1200);
        return {
          width: Math.floor(baseWidth * scale),
          height: Math.floor(baseHeight * scale),
        };
      }

      // Scale up on extra large screens
      if (screenWidth >= 1400) {
        const scale = Math.min(1.4, screenWidth / 1400);
        return {
          width: Math.floor(baseWidth * scale),
          height: Math.floor(baseHeight * scale),
        };
      }
      return { width: baseWidth, height: baseHeight };
    };

    const windowSize = getResponsiveWindowSize();
    const cascadeOffset = 35;

    // Start higher up for the first window, then cascade
    const baseX = Math.max(0, (window.innerWidth - windowSize.width) / 2);
    const baseY =
      Math.max(0, (window.innerHeight - windowSize.height) / 2) - 50;

    const x = baseX + cascadeOffset;
    const y = baseY + cascadeOffset;

    // Ensure window doesn't go off-screen
    const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
    const maxY = Math.max(0, window.innerHeight - windowSize.height - 80);

    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  });

  const [windowSize, setWindowSize] = useState(() => {
    const screenWidth = window.innerWidth;
    const baseWidth = 850;
    const baseHeight = 650;

    if (screenWidth < 1200) {
      const scale = Math.max(0.7, screenWidth / 1200);
      return {
        width: Math.floor(baseWidth * scale),
        height: Math.floor(baseHeight * scale),
      };
    }
    return { width: baseWidth, height: baseHeight };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle window resize to keep window responsive
  useEffect(() => {
    const handleWindowResize = () => {
      const getResponsiveWindowSize = () => {
        const screenWidth = window.innerWidth;
        const baseWidth = 800;
        const baseHeight = 600;

        if (screenWidth < 1200) {
          const scale = Math.max(0.4, screenWidth / 1200);
          return {
            width: Math.floor(baseWidth * scale),
            height: Math.floor(baseHeight * scale),
          };
        }

        // Scale up on extra large screens
        if (screenWidth >= 1400) {
          const scale = Math.min(1.4, screenWidth / 1400);
          return {
            width: Math.floor(baseWidth * scale),
            height: Math.floor(baseHeight * scale),
          };
        }
        return { width: baseWidth, height: baseHeight };
      };

      const newWindowSize = getResponsiveWindowSize();
      setWindowSize(newWindowSize);

      // Maintain cascading position while scaling
      const cascadeOffset = 35;
      const baseX = Math.max(0, (window.innerWidth - newWindowSize.width) / 2);
      const baseY =
        Math.max(0, (window.innerHeight - newWindowSize.height) / 2) - 50;

      const x = baseX + cascadeOffset;
      const y = baseY + cascadeOffset;

      // Ensure window doesn't go off-screen with proper margins
      const maxX = Math.max(0, window.innerWidth - newWindowSize.width - 20);
      const maxY = Math.max(0, window.innerHeight - newWindowSize.height - 80);

      setPosition({
        x: Math.min(Math.max(0, x), maxX),
        y: Math.min(Math.max(0, y), maxY),
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const newPosition = {
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        };
        setPosition(newPosition);
        if (onMove) {
          onMove(newPosition.x, newPosition.y);
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        const response = await fetch("/api/content/markdown", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ markdown: project.content }),
        });

        const result = await response.json();
        if (result.success) {
          setHtmlContent(result.data);
        }
      } catch (error) {
        console.error("Error converting markdown:", error);
      }
    };
    convertMarkdown();
  }, [project.content]);

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const windowContent = (
    <>
      {/* Backdrop to close window when clicked outside */}
      <div
        className="fixed inset-0 bg-transparent z-[99998]"
        onClick={onClose}
      />
      <div
        className={`retro-window fixed ${isActive ? "active" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          width: windowSize.width,
          height: windowSize.height,
          zIndex: 99999,
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (onActivate) {
            onActivate();
          }
        }}
      >
        {/* Window Titlebar */}
        <div
          className={`window-titlebar cursor-move ${isActive ? "active" : ""}`}
          onMouseDown={(e) => {
            startDrag(e);
            if (onActivate) {
              onActivate();
            }
          }}
        >
          <div className="flex items-center space-x-2">
            <span>{project.title}</span>
          </div>
          <div className="flex space-x-1">
            {/* Minimize Button */}
            <button
              className="w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-black text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              style={{
                boxShadow: "inset 1px 1px 0 #ffff80, inset -1px -1px 0 #808000",
                borderRadius: "4px",
              }}
            >
              −
            </button>
            {/* Close Button */}
            <button
              className="w-7 h-7 bg-red-600 border-2 border-red-800 flex items-center justify-center text-white text-lg font-bold hover:bg-red-500 transition-colors cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              style={{
                boxShadow: "inset 1px 1px 0 #ff8080, inset -1px -1px 0 #800000",
                borderRadius: "4px",
              }}
            >
              ×
            </button>
          </div>
        </div>
        {/* Window Content */}
        <div className="window-content h-full overflow-auto relative">
          <div className="p-4">
            {/* Project Header */}
            <div className="flex items-center gap-3 mb-4">
              <PixelIcon icon={getProjectIcon(project.title)} size={32} />
              <div>
                <h1 className="text-xl font-bold text-[#000080]">
                  {project.title}
                </h1>
                <p className="text-sm text-[#000000]">{project.description}</p>
              </div>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-[#ffffff] border border-[#808080] p-3">
                <span className="text-xs text-[#808080]">Client</span>
                <p className="font-medium text-sm">{project.client}</p>
              </div>
              <div className="bg-[#ffffff] border border-[#808080] p-3">
                <span className="text-xs text-[#808080]">Duration</span>
                <p className="font-medium text-sm">{project.duration}</p>
              </div>
              <div className="bg-[#ffffff] border border-[#808080] p-3">
                <span className="text-xs text-[#808080]">Date</span>
                <p className="font-medium text-sm">
                  {new Date(project.date).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3 mb-4">
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors"
                >
                  View Live Site
                </a>
              )}
              {project.github_url && (
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#c0c0c0] border-2 border-[#dfdfdf] border-t-[#808080] border-l-[#808080] text-[#000000] font-semibold text-sm hover:bg-[#d4d0c8] transition-colors"
                >
                  View Code
                </a>
              )}
            </div>

            {/* Project Content */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-[#000080] mb-4">
                📄 Project Details
              </h2>
              <div
                className="prose prose-sm max-w-none text-[#000000]"
                style={
                  {
                    // Tailwind prose overrides
                    "--tw-prose-body": "#000000",
                    "--tw-prose-headings": "#000080",
                    "--tw-prose-links": "#000080",
                  } as React.CSSProperties
                }
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            {/* Technologies Used */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#000080] mb-4">
                🔧 Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#ffffff] border border-[#808080] text-[#000000] font-medium text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#000080] mb-4">
                  🖼️ Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="bg-[#ffffff] border border-[#808080] h-48 flex items-center justify-center"
                    >
                      <span className="text-[#808080] text-sm">
                        Gallery Image {index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );

  if (!mounted) return null;

  return createPortal(windowContent, document.body);
}

/**
 * Get Project Icon
 *
 * Maps project titles to appropriate Windows 98-style icons.
 * Returns emoji representations that will be styled by the PixelIcon component.
 */
function getProjectIcon(projectTitle: string): string {
  const title = projectTitle.toLowerCase();

  if (title.includes("landscape") || title.includes("edgewater")) {
    return "📁"; // Folder icon for landscape project
  } else if (title.includes("smps") || title.includes("new york")) {
    return "💼"; // Briefcase for professional services
  } else if (title.includes("sbn") || title.includes("philadelphia")) {
    return "📁"; // Folder for business network
  } else if (title.includes("evron")) {
    return "📧"; // Mail for e-commerce
  } else if (title.includes("springboard") || title.includes("collaborative")) {
    return "📁"; // Folder for educational nonprofit
  } else if (title.includes("u3") || title.includes("studio")) {
    return "💼"; // Briefcase for creative agency
  } else {
    return "📁"; // Default folder icon
  }
}
