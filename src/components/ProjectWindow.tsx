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
import PageLayout, {
  ContentSection,
  InfoCard,
  InfoGrid,
  LinkButton,
  LinkGrid,
} from "./PageLayout";
import ProjectImageGallery from "./ProjectImageGallery";
import WindowLoader from "./WindowLoader";

import { ProjectWindowProps } from "@/types";

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
  const [loading, setLoading] = useState(true);
  // const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState(() => {
    // Use external position if provided, otherwise calculate default
    if (externalPosition) {
      return externalPosition;
    }

    // Use exact same size and positioning as work window
    const getResponsiveWindowSize = () => {
      const screenWidth = window.innerWidth;

      const baseWidth = 850;
      const baseHeight = 550; // Reduced from 650 to 550

      // Mobile-first responsive design with more height for mobile
      if (screenWidth <= 360) {
        // Extra small mobile - more height
        return {
          width: 280,
          height: 400, // Increased from 240
        };
      } else if (screenWidth <= 480) {
        // Small mobile - more height
        return {
          width: 320,
          height: 450, // Increased from 280
        };
      } else if (screenWidth <= 600) {
        // Mobile - more height
        return {
          width: 400,
          height: 500, // Increased from 350
        };
      } else if (screenWidth <= 768) {
        // Tablet
        const scale = Math.max(0.6, screenWidth / 768);
        return {
          width: Math.floor(baseWidth * scale),
          height: Math.floor(baseHeight * scale),
        };
      } else if (screenWidth < 1200) {
        // Small desktop
        const scale = Math.max(0.7, screenWidth / 1200);
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

    // Center the window on screen
    const baseX = Math.max(0, (window.innerWidth - windowSize.width) / 2);
    const baseY = Math.max(0, (window.innerHeight - windowSize.height) / 2);

    // Add cascade offset for multiple windows
    const x = baseX + cascadeOffset;
    const y = baseY + cascadeOffset;

    // Ensure window doesn't go off-screen (leave space for taskbar)
    const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
    const maxY = Math.max(0, window.innerHeight - windowSize.height - 80); // Taskbar height is ~52px, so leave 80px margin

    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  });

  const [windowSize, setWindowSize] = useState(() => {
    const screenWidth = window.innerWidth;
    const baseWidth = 850;
    const baseHeight = 550; // Reduced from 650 to 550

    // Mobile-first responsive design with more height for mobile
    if (screenWidth <= 360) {
      // Extra small mobile - more height
      return {
        width: 280,
        height: 400, // Increased from 240
      };
    } else if (screenWidth <= 480) {
      // Small mobile - more height
      return {
        width: 320,
        height: 450, // Increased from 280
      };
    } else if (screenWidth <= 600) {
      // Mobile - more height
      return {
        width: 400,
        height: 500, // Increased from 350
      };
    } else if (screenWidth <= 768) {
      // Tablet
      const scale = Math.max(0.6, screenWidth / 768);
      return {
        width: Math.floor(baseWidth * scale),
        height: Math.floor(baseHeight * scale),
      };
    } else if (screenWidth < 1200) {
      // Small desktop
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
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle window resize to keep window responsive
  useEffect(() => {
    const handleWindowResize = () => {
      const getResponsiveWindowSize = () => {
        const screenWidth = window.innerWidth;
        const baseWidth = 850;
        const baseHeight = 550; // Reduced from 600 to 550

        // Mobile-first responsive design with more height for mobile
        if (screenWidth <= 360) {
          // Extra small mobile - more height
          return {
            width: 280,
            height: 400, // Increased from 240
          };
        } else if (screenWidth <= 480) {
          // Small mobile - more height
          return {
            width: 320,
            height: 450, // Increased from 280
          };
        } else if (screenWidth <= 600) {
          // Mobile - more height
          return {
            width: 400,
            height: 500, // Increased from 350
          };
        } else if (screenWidth <= 768) {
          // Tablet
          const scale = Math.max(0.6, screenWidth / 768);
          return {
            width: Math.floor(baseWidth * scale),
            height: Math.floor(baseHeight * scale),
          };
        } else if (screenWidth < 1200) {
          // Small desktop
          const scale = Math.max(0.7, screenWidth / 1200);
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

      // Ensure window doesn't go off-screen with proper margins (leave space for taskbar)
      const maxX = Math.max(0, window.innerWidth - newWindowSize.width - 20);
      const maxY = Math.max(0, window.innerHeight - newWindowSize.height - 80); // Taskbar height is ~52px, so leave 80px margin

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
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        // Constrain to viewport bounds
        const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
        const maxY = Math.max(0, window.innerHeight - windowSize.height - 80);

        const constrainedX = Math.min(Math.max(0, newX), maxX);
        const constrainedY = Math.min(Math.max(0, newY), maxY);

        setPosition({ x: constrainedX, y: constrainedY });
        onMove?.(constrainedX, constrainedY);
      } else if (isResizing) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;

        const newWidth = Math.max(300, resizeStart.width + deltaX);
        const newHeight = Math.max(200, resizeStart.height + deltaY);

        // Constrain to viewport bounds
        const maxWidth = window.innerWidth - position.x - 20;
        const maxHeight = window.innerHeight - position.y - 80;

        const constrainedWidth = Math.min(newWidth, maxWidth);
        const constrainedHeight = Math.min(newHeight, maxHeight);

        setWindowSize({ width: constrainedWidth, height: constrainedHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset, isResizing, resizeStart, windowSize.width, windowSize.height, position.x, position.y, onMove]);

  useEffect(() => {
    const convertMarkdown = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
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

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: windowSize.width,
      height: windowSize.height,
    });
  };

  const windowContent = (
    <>
      <div
        className={`retro-window fixed ${isActive ? "active" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          width: windowSize.width,
          height: windowSize.height,
          zIndex: 999, // Higher than main windows but lower than taskbar (1000)
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
              className="w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer"
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
              className="w-7 h-7 bg-red-600 border-2 border-red-800 flex items-center justify-center text-white text-lg font-bold hover:bg-red-400 transition-colors cursor-pointer"
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
        <div
          className="window-content h-full relative"
          style={{ overflow: loading ? 'hidden' : 'auto' }}
        >
          {/* Loader Overlay */}
          {loading && (
            <div className="window-loader-overlay">
              <WindowLoader isLoading={true} />
            </div>
          )}
          {/* Main Content (hidden under overlay while loading) */}
          <PageLayout
            page="project"
            title={project.title}
            description={project.description}
            icon="/images/rw-site-icon-folder-close.png"
          >
            {/* Project Meta */}
            <ContentSection title="Project Overview" icon="📁">
              <InfoGrid columns={3}>
                <InfoCard title="Client">
                  {project.client}
                </InfoCard>
                <InfoCard title="Duration">
                  {project.duration}
                </InfoCard>
                <InfoCard title="Date">
                  {new Date(project.date).toLocaleDateString()}
                </InfoCard>
              </InfoGrid>
            </ContentSection>

            {/* Project Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <ContentSection title="Project Gallery" icon="🖼️">
                <ProjectImageGallery images={project.gallery} />
              </ContentSection>
            )}

            {/* Project Links */}
            <ContentSection title="Project Links" icon="🔗">
              <LinkGrid>
                {project.live_url && (
                  <LinkButton href={project.live_url}>
                    View Live Site
                  </LinkButton>
                )}
                {project.github_url && (
                  <LinkButton href={project.github_url}>
                    View Code
                  </LinkButton>
                )}
              </LinkGrid>
            </ContentSection>

            {/* Project Content */}
            <ContentSection title="Project Details" icon="📄">
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
            </ContentSection>

            {/* Technologies Used */}
            <ContentSection title="Technologies Used" icon="🔧">
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
            </ContentSection>
          </PageLayout>
        </div>

        {/* Resize Handle - Windows 11 style */}
        <div
          className="cursor-se-resize"
          onMouseDown={startResize}
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            width: "25px",
            height: "25px",
            background: "#c0c0c0",
            cursor: "se-resize",
            zIndex: 20,
            boxShadow: "inset 1px 1px 0 #ffffff, inset -1px -1px 0 #808080",
            clipPath: "polygon(100% 0%, 0% 100%, 100% 100%)",
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "4px 4px",
          }}
        />
      </div>
    </>
  );

  if (!mounted) return null;

  return createPortal(windowContent, document.body);
}
