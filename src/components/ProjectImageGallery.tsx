"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Project Image Gallery Component
 *
 * A reusable masonry-style image gallery component that displays project images
 * in a responsive 2-column layout. Images can be clicked to open in cascading
 * windows with Windows 98-style controls.
 *
 * Features:
 * - Masonry layout with 2 columns
 * - Responsive design for mobile and desktop
 * - Click to open images in new windows
 * - Windows 98-style window controls
 * - Proper cascading positioning
 * - Portal rendering for proper z-indexing
 * - No pixel filter on images for crisp display
 */

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  className?: string;
}

interface ImageWindowProps {
  image: ProjectImage;
  onClose: () => void;
  onMinimize: () => void;
  position: { x: number; y: number };
  zIndex: number;
}

function ImageWindow({ image, onClose, onMinimize, position, zIndex }: ImageWindowProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [windowPosition, setWindowPosition] = useState(position);

  // Calculate responsive window size - EXACT copy from ProjectWindow
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

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - windowPosition.x,
      y: e.clientY - windowPosition.y,
    });
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;
      // Constrain to viewport bounds - account for taskbar
      const taskbarHeight = 80;
      const availableHeight = window.innerHeight - taskbarHeight;
      const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
      const maxY = Math.max(0, availableHeight - windowSize.height);
      const constrainedX = Math.min(Math.max(0, newX), maxX);
      const constrainedY = Math.min(Math.max(0, newY), maxY);
      setWindowPosition({ x: constrainedX, y: constrainedY });
    }
  }, [isDragging, dragOffset, windowSize.width, windowSize.height]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Keep window centered when screen resizes
  useEffect(() => {
    const handleWindowResize = () => {
      const newWindowSize = getResponsiveWindowSize();
      const newX = Math.max(0, (window.innerWidth - newWindowSize.width) / 2);
      const newY = Math.max(0, (window.innerHeight - newWindowSize.height - 80) / 2);

      setWindowPosition({
        x: Math.min(Math.max(0, newX), Math.max(0, window.innerWidth - newWindowSize.width - 20)),
        y: Math.min(Math.max(0, newY), Math.max(0, window.innerHeight - newWindowSize.height - 80)),
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const windowContent = (
    <div
      className="retro-window fixed"
      style={{
        left: windowPosition.x,
        top: windowPosition.y,
        width: windowSize.width,
        height: windowSize.height + 40, // 40px for titlebar
        zIndex: zIndex,
        maxWidth: '90vw',
        maxHeight: '90vh',
        minWidth: 320,
        minHeight: 200,
        overflow: 'hidden',
      }}
    >
      {/* Window Titlebar */}
      <div
        className="window-titlebar cursor-move"
        onMouseDown={startDrag}
      >
        <div className="flex items-center space-x-2">
          <span>{image.alt}</span>
        </div>
        <div className="flex space-x-1">
          {/* Minimize Button */}
          <button
            className="w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
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
      <div className="window-content h-full relative overflow-hidden">
        <div className="w-full h-full flex items-center justify-center p-4">
          <Image
            src={`${image.src}?v=${Date.now()}`}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="max-w-full max-h-full object-contain gallery-image"
            style={{
              filter: "none",
              imageRendering: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(windowContent, document.body);
}

export default function ProjectImageGallery({ images, className = "" }: ProjectImageGalleryProps) {
  const [openWindows, setOpenWindows] = useState<{
    [key: string]: {
      image: ProjectImage;
      position: { x: number; y: number };
      zIndex: number;
    };
  }>({});
  const [nextZIndex, setNextZIndex] = useState(1000);

  const openImageWindow = (image: ProjectImage, index: number) => {
    const windowId = `image-${index}`;

    // Clear all existing windows first - same as project windows
    setOpenWindows({});

    // Calculate responsive window size like project windows
    const getResponsiveWindowSize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 800;
      const baseHeight = 600;

      // Mobile-first responsive design
      if (screenWidth <= 360) {
        return {
          width: 280,
          height: 400,
        };
      } else if (screenWidth <= 480) {
        return {
          width: 320,
          height: 450,
        };
      } else if (screenWidth <= 600) {
        return {
          width: 400,
          height: 500,
        };
      } else if (screenWidth <= 768) {
        const scale = Math.max(0.6, screenWidth / 768);
        return {
          width: Math.floor(baseWidth * scale),
          height: Math.floor(baseHeight * scale),
        };
      } else if (screenWidth < 1200) {
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

    // Always center the window - no cascade offset
    const x = Math.max(0, (window.innerWidth - windowSize.width) / 2);
    const y = Math.max(0, (window.innerHeight - windowSize.height - 80) / 2); // Account for taskbar

    // Ensure window doesn't go off-screen (leave space for taskbar)
    const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
    const maxY = Math.max(0, window.innerHeight - windowSize.height - 80); // Taskbar height is ~52px, so leave 80px margin

    const position = {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };

    setOpenWindows(prev => ({
      ...prev,
      [windowId]: {
        image,
        position,
        zIndex: nextZIndex,
      },
    }));

    setNextZIndex(prev => prev + 1);
  };

  const closeImageWindow = (windowId: string) => {
    setOpenWindows(prev => {
      const newWindows = { ...prev };
      delete newWindows[windowId];
      return newWindows;
    });
  };

  const minimizeImageWindow = (windowId: string) => {
    // For now, just close the window (minimize functionality can be added later)
    closeImageWindow(windowId);
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Masonry Gallery */}
      <div className={`project-image-gallery ${className}`}>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "auto auto",
            gridTemplateAreas: `
              "first second"
              "third second"
            `,
            alignItems: "stretch",
          }}
        >
          {/* First image in first column */}
          <div
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => openImageWindow(images[0], 0)}
            style={{
              gridArea: "first",
              aspectRatio: "32/24",
              overflow: "hidden",
            }}
          >
            <Image
              src={`${images[0].src}?v=${Date.now()}`}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              className="w-full h-full object-cover rounded-sm gallery-image"
              style={{
                border: "2px outset #ffffff",
                borderTopColor: "#c0c0c0",
                borderLeftColor: "#c0c0c0",
                filter: "none",
                imageRendering: "auto",
                objectPosition: "top",
              }}
            />
          </div>

          {/* Second image in second column (spans both rows) */}
          {images[1] && (
            <div
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageWindow(images[1], 1)}
              style={{
                gridArea: "second",
                aspectRatio: "32/24",
                overflow: "hidden",
              }}
            >
              <Image
                src={`${images[1].src}?v=${Date.now()}`}
                alt={images[1].alt}
                width={images[1].width}
                height={images[1].height}
                className="w-full h-full object-cover rounded-sm gallery-image"
                style={{
                  border: "2px outset #ffffff",
                  borderTopColor: "#c0c0c0",
                  borderLeftColor: "#c0c0c0",
                  filter: "none",
                  imageRendering: "auto",
                  objectPosition: "top",
                }}
              />
            </div>
          )}

          {/* Third image (thumbnail) in first column, below first image */}
          {images[2] && (
            <div
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => openImageWindow(images[2], 2)}
              style={{
                gridArea: "third",
                aspectRatio: "32/24",
                overflow: "hidden",
              }}
            >
              <Image
                src={`${images[2].src}?v=${Date.now()}`}
                alt={images[2].alt}
                width={images[2].width}
                height={images[2].height}
                className="w-full h-full object-cover rounded-sm gallery-image"
                style={{
                  border: "2px outset #ffffff",
                  borderTopColor: "#c0c0c0",
                  borderLeftColor: "#c0c0c0",
                  filter: "none",
                  imageRendering: "auto",
                  objectPosition: "top",
                }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Image Windows */}
      {Object.entries(openWindows).map(([windowId, windowData]) => (
        <ImageWindow
          key={windowId}
          image={windowData.image}
          onClose={() => closeImageWindow(windowId)}
          onMinimize={() => minimizeImageWindow(windowId)}
          position={windowData.position}
          zIndex={windowData.zIndex}
        />
      ))}

      {/* Responsive styles */}
      <style jsx>{`
        .project-image-gallery {
          margin: 2rem 0;
        }

        .gallery-image {
          filter: none !important;
          image-rendering: auto !important;
        }

        @media (max-width: 768px) {
          .project-image-gallery .grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
          }

          .project-image-gallery .grid > div:nth-child(2) {
            grid-row: span 1;
          }
        }

        @media (max-width: 480px) {
          .project-image-gallery {
            margin: 1rem 0;
          }
        }
      `}</style>
    </>
  );
}
