"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import WindowContent from "./WindowContent";
import WindowLoader from "./WindowLoader";

import { Window } from "@/types";

// Returns the right icon path based on nav item name
const getIconSrc = (itemName: string, isHovered: boolean = false): string => {
  switch (itemName) {
    case "About":
      return "/images/rw-logo.png";
    case "Work":
      return "/images/rw-site-icon-work.png";
    case "Contact":
      return "/images/rw-site-icon-folder-closed-contact.png";
    default:
      return isHovered
        ? "/images/rw-site-icon-folder-open.png"
        : "/images/rw-site-icon-folder-close.png";
  }
};

// Maps routes to their window content
const windowContentMap: Record<string, React.ReactNode> = {
  "/": <WindowContent page="home" />,
  "/about": <WindowContent page="about" />,
  "/work": <WindowContent page="work" />,
  "/contact": <WindowContent page="contact" />,
};

// Main desktop component - handles windows, taskbar, icons, and all the desktop stuff
export default function RetroDesktop() {
  const pathname = usePathname();

  // Window management state
  const [windows, setWindows] = useState<Window[]>([]);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  // Desktop interaction state
  const [selectedDesktopIcon, setSelectedDesktopIcon] = useState<string | null>(
    null
  );

  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [hoveredStartMenuItem, setHoveredStartMenuItem] = useState<string | null>(
    null
  );
  const [hoveredTaskbarIcon, setHoveredTaskbarIcon] = useState<string | null>(
    null
  );

  // Drag and resize state
  const [draggedWindow, setDraggedWindow] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizingWindow, setResizingWindow] = useState<string | null>(null);
  const [resizeStart, setResizeStart] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Window loading state
  const [windowLoading, setWindowLoading] = useState<{
    [key: string]: boolean;
  }>({});

  // Utility refs and state
  const initializedWindows = useRef<Set<string>>(new Set());
  const [hasMounted, setHasMounted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [timeBasedGradient, setTimeBasedGradient] = useState("");

  // Background gradient changes based on time of day
  const getTimeBasedGradient = (hour: number) => {
    if (hour >= 6 && hour < 12) {
      // Morning: Bright blue to pink with smooth blending
      return "linear-gradient(180deg, #6bb8e6 0%, #75bee8 10%, #7fc4f0 20%, #8ac8f0 30%, #96c8f0 40%, #a3cce8 50%, #b0d0e8 60%, #b6c4e0 70%, #c0b8d8 80%, #ccc0d0 85%, #d8a8c8 90%, #e4a8c8 92%, #f0a0c8 95%, #f0a0c8 100%)";
    } else if (hour >= 12 && hour < 18) {
      // Afternoon: Yellow to orange to pink with smooth blending
      return "linear-gradient(180deg, #f0d000 0%, #f0c820 10%, #e8b030 25%, #e8b840 35%, #e0a83d 45%, #e4a850 52%, #e8b065 60%, #d8a870 70%, #d0a8a8 80%, #d4a8b0 85%, #d8a8c8 90%, #e4a8c8 92%, #f0a0c8 95%, #f0a0c8 100%)";
    } else if (hour >= 18 && hour < 22) {
      // Evening: Purple to pink with smooth blending
      return "linear-gradient(180deg, #8360cb 0%, #8a6bc9 10%, #9575c9 25%, #9a7cc9 35%, #a18cc9 45%, #ab8cb8 52%, #b892b8 60%, #bc98b8 70%, #c0a0c0 80%, #c8a4c4 85%, #d8a8c8 90%, #e0a8c8 92%, #f0a0c8 95%, #f0a0c8 100%)";
    } else {
      // Night: Dark indigo to pink with smooth blending
      return "linear-gradient(180deg, #3b0072 0%, #3f0a75 8%, #4a1a7a 25%, #4f257d 32%, #5a3c83 45%, #604a88 50%, #6a5a95 55%, #7a6ba8 60%, #8275a8 68%, #8a7fa8 72%, #9880a8 80%, #a888a8 85%, #b890a8 88%, #c898a8 90%, #d0a0a8 92%, #d8a8c8 94%, #e4a8c8 96%, #f0a0c8 98%, #f0a0c8 100%)";
    }
  };


  // Main nav items that show up as desktop icons
  const navigation = useMemo(() => [
    { name: "About", href: "/about", icon: "about" },
    { name: "Work", href: "/work", icon: "folder" },
    { name: "Contact", href: "/contact", icon: "contact" },
  ], []);

  // Calculates window size based on screen - smaller screens get smaller windows
  const getResponsiveWindowSize = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const taskbarHeight = 60; // Account for taskbar
    const availableHeight = screenHeight - taskbarHeight - 20; // Minimal margin for mobile/tablet

    // Base sizes for large screens (desktop - keep original)
    const baseWidth = 850;
    const baseHeight = 550;

    // Mobile and tablet: Use much more of the available height
    if (screenWidth <= 360) {
      // Extra small mobile - fill most of height
      return {
        width: 280,
        height: Math.max(400, Math.min(availableHeight * 0.85, availableHeight)),
      };
    } else if (screenWidth <= 480) {
      // Small mobile - fill most of height
      return {
        width: 320,
        height: Math.max(450, Math.min(availableHeight * 0.85, availableHeight)),
      };
    } else if (screenWidth <= 600) {
      // Mobile - fill most of height
      return {
        width: 400,
        height: Math.max(500, Math.min(availableHeight * 0.85, availableHeight)),
      };
    } else if (screenWidth <= 768) {
      // Tablet portrait - use 80% of available height
      const widthScale = Math.max(0.6, screenWidth / 768);
      const targetHeight = Math.floor(availableHeight * 0.8);
      return {
        width: Math.floor(baseWidth * widthScale),
        height: Math.max(500, targetHeight),
      };
    } else if (screenWidth <= 1024) {
      // Tablet landscape - use 75% of available height
      const widthScale = Math.max(0.75, screenWidth / 1024);
      const targetHeight = Math.floor(availableHeight * 0.75);
      return {
        width: Math.floor(baseWidth * widthScale),
        height: Math.max(550, targetHeight),
      };
    } else if (screenWidth < 1200) {
      // Small desktop - keep original behavior (don't change)
      const scale = Math.max(0.7, screenWidth / 1200);
      return {
        width: Math.floor(baseWidth * scale),
        height: Math.floor(baseHeight * scale),
      };
    }

    // Desktop and larger - keep original behavior (don't change)
    if (screenWidth >= 1400) {
      const scale = Math.min(1.4, screenWidth / 1400);
      return {
        width: Math.floor(baseWidth * scale),
        height: Math.floor(baseHeight * scale),
      };
    }

    // Default desktop - keep original (don't change)
    return { width: baseWidth, height: baseHeight };
  };

  // Cascades new windows diagonally like old Windows - each one offset from the last
  const getCascadingPosition = useCallback(() => {
    const windowSize = getResponsiveWindowSize();
    const cascadeOffset = 35; // Larger offset for better spacing
    const taskbarHeight = 60;
    const availableHeight = window.innerHeight - taskbarHeight;

    // Count how many windows are currently open
    const openWindowCount = windows.filter((w) => !w.isMinimized).length;

    // Start higher up for the first window, then cascade
    // Better centering that accounts for actual available height
    const baseX = Math.max(0, (window.innerWidth - windowSize.width) / 2);
    const baseY = Math.max(0, (availableHeight - windowSize.height) / 2) - 30; // Start higher

    const x = baseX + openWindowCount * cascadeOffset;
    const y = baseY + openWindowCount * cascadeOffset;

    // Ensure window doesn't go off-screen with proper margins
    const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
    const maxY = Math.max(0, availableHeight - windowSize.height - 20); // Leave space for taskbar

    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  }, [windows]);

  // Auto-open window for current route on mount/pathname change
  useEffect(() => {
    // Skip window management for work page - it has its own window system
    if (pathname === "/work") {
      return;
    }

    const currentPage = navigation.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    );

    if (currentPage && !initializedWindows.current.has(currentPage.href)) {
      initializedWindows.current.add(currentPage.href);
      const cascadePos = getCascadingPosition();
      const windowSize = getResponsiveWindowSize();
      const newWindow: Window = {
        id: currentPage.href,
        title: currentPage.name,
        isOpen: true,
        isMinimized: false,
        zIndex: windows.length + 1,
        position: cascadePos,
        size: windowSize,
      };
      setWindows((prev) => [...prev, newWindow]);
      setActiveWindow(newWindow.id);
    }
  }, [pathname, windows.length, getCascadingPosition, navigation]);

  /**
   * Update Clock Every Second
   *
   * Keeps the taskbar clock synchronized with the current time.
   * This adds to the authentic Windows 95/98 experience.
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /**
   * Close Start Menu When Clicking Outside
   *
   * Provides intuitive behavior where clicking outside the start menu
   * closes it, similar to how Windows 95/98 worked.
   */
  useEffect(() => {
    const handleClickOutside = () => {
      setStartMenuOpen(false);
    };

    if (startMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [startMenuOpen]);

  /**
   * Handle Mouse Move for Dragging and Resizing
   *
   * Manages the real-time updates when users are dragging windows
   * or resizing them. This creates smooth, responsive interactions.
   */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedWindow) {
        // Update window position during drag with bounds checking
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        // Get the window being dragged
        const draggedWin = windows.find((w) => w.id === draggedWindow);
        if (draggedWin) {
          const taskbarHeight = 60;
          const availableHeight = window.innerHeight - taskbarHeight;
          const maxX = Math.max(
            0,
            window.innerWidth - draggedWin.size.width - 20
          );
          const maxY = Math.max(
            0,
            availableHeight - draggedWin.size.height - 20
          );

          const constrainedX = Math.min(Math.max(0, newX), maxX);
          const constrainedY = Math.min(Math.max(0, newY), maxY);

          setWindows((prev) =>
            prev.map((w) =>
              w.id === draggedWindow
                ? {
                  ...w,
                  position: {
                    x: constrainedX,
                    y: constrainedY,
                  },
                }
                : w
            )
          );
        }
      } else if (resizingWindow) {
        // Update window size during resize with bounds checking
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        const responsiveSize = getResponsiveWindowSize();
        const minWidth = Math.max(350, responsiveSize.width * 0.5);
        const minHeight = Math.max(250, responsiveSize.height * 0.5);
        const newWidth = Math.max(minWidth, resizeStart.width + deltaX);
        const newHeight = Math.max(minHeight, resizeStart.height + deltaY);

        // Constrain maximum size to viewport (accounting for taskbar)
        const taskbarHeight = 60;
        const availableHeight = window.innerHeight - taskbarHeight;
        const maxWidth = window.innerWidth - 40;
        const maxHeight = availableHeight - 40;

        const constrainedWidth = Math.min(newWidth, maxWidth);
        const constrainedHeight = Math.min(newHeight, maxHeight);

        setWindows((prev) =>
          prev.map((w) =>
            w.id === resizingWindow
              ? {
                ...w,
                size: { width: constrainedWidth, height: constrainedHeight },
              }
              : w
          )
        );
      }
    };

    const handleMouseUp = () => {
      // End drag and resize operations
      setDraggedWindow(null);
      setResizingWindow(null);
    };

    if (draggedWindow || resizingWindow) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [draggedWindow, dragOffset, resizingWindow, resizeStart, windows]);

  // Opens a window or brings existing one to front
  const openWindow = (href: string, title: string) => {
    const existingWindow = windows.find((w) => w.id === href);
    if (existingWindow) {
      // Bring existing window to front
      setActiveWindow(href);
      setWindows((prev) =>
        prev.map((w) =>
          w.id === href
            ? {
              ...w,
              isMinimized: false,
              zIndex: Math.max(...prev.map((w) => w.zIndex)) + 1,
            }
            : w
        )
      );
    } else {
      // Set loading state for new window
      setWindowLoading((prev) => ({ ...prev, [href]: true }));

      // Create new window
      const cascadePos = getCascadingPosition();
      const windowSize = getResponsiveWindowSize();
      const newWindow: Window = {
        id: href,
        title,
        isOpen: true,
        isMinimized: false,
        zIndex: Math.max(...windows.map((w) => w.zIndex), 0) + 1,
        position: cascadePos,
        size: windowSize,
      };
      setWindows((prev) => [...prev, newWindow]);
      setActiveWindow(newWindow.id);

      // Simulate loading time and then hide loader
      setTimeout(() => {
        setWindowLoading((prev) => ({ ...prev, [href]: false }));
      }, 1500);
    }
  };

  /**
   * Close Window Function
   *
   * Removes a window from the desktop and clears it as the active window
   * if it was currently active.
   */
  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  /**
   * Minimize Window Function
   *
   * Hides a window from view while keeping it in memory.
   * The window can be restored by clicking its taskbar icon.
   */
  const minimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w))
    );
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const unminimizeWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isMinimized: false } : w))
    );
    setActiveWindow(id);
  };

  // Brings window to front by bumping its z-index
  const bringToFront = (id: string) => {
    setActiveWindow(id);
    setWindows((prev) =>
      prev.map((w) => ({
        ...w,
        zIndex:
          w.id === id ? Math.max(...prev.map((w) => w.zIndex)) + 1 : w.zIndex,
      }))
    );
  };

  // Starts dragging a window - tracks mouse offset from window position
  const startDrag = (e: React.MouseEvent, windowId: string) => {
    e.preventDefault();
    const window = windows.find((w) => w.id === windowId);
    if (window) {
      setDraggedWindow(windowId);
      setDragOffset({
        x: e.clientX - window.position.x,
        y: e.clientY - window.position.y,
      });
      bringToFront(windowId);
    }
  };

  // Starts resizing a window - tracks initial size and mouse position
  const startResize = (e: React.MouseEvent, windowId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const window = windows.find((w) => w.id === windowId);
    if (window) {
      setResizingWindow(windowId);
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: window.size.width,
        height: window.size.height,
      });
      bringToFront(windowId);
    }
  };

  // Toggles start menu open/closed
  const toggleStartMenu = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setStartMenuOpen(!startMenuOpen);
  };

  // Close start menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && startMenuOpen) {
        setStartMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [startMenuOpen]);

  // Set mounted flag for client-side only stuff like clock
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Keeps windows in bounds when screen resizes and recalculates positions
  useEffect(() => {
    const handleWindowResize = () => {
      setWindows((prev) => {
        // Recalculate cascading positions for all windows
        const updatedWindows = prev.map((win, index) => {
          const newSize = getResponsiveWindowSize();
          const cascadeOffset = 35;
          const taskbarHeight = 60;
          const availableHeight = window.innerHeight - taskbarHeight;

          // Calculate new cascading position based on window order
          const baseX = Math.max(0, (window.innerWidth - newSize.width) / 2);
          const baseY =
            Math.max(0, (availableHeight - newSize.height) / 2) - 30; // Start higher

          const newX = baseX + index * cascadeOffset;
          const newY = baseY + index * cascadeOffset;

          // Ensure window doesn't go off-screen
          const maxX = Math.max(0, window.innerWidth - newSize.width - 20);
          const maxY = Math.max(0, availableHeight - newSize.height - 20);

          const constrainedX = Math.min(Math.max(0, newX), maxX);
          const constrainedY = Math.min(Math.max(0, newY), maxY);

          return {
            ...win,
            position: { x: constrainedX, y: constrainedY },
            size: newSize,
          };
        });

        return updatedWindows;
      });
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Update time-based gradient when time changes
  useEffect(() => {
    const hour = currentTime.getHours();
    setTimeBasedGradient(getTimeBasedGradient(hour));
  }, [currentTime]);

  return (
    <div
      className="desktop-bg min-h-screen relative overflow-hidden"
      style={{
        background: timeBasedGradient,
        transition: "background 0.5s ease-in-out",
      }}
    >
      {/*
        Animated Cloud Scene
        Pixel art clouds that move across the desktop background
        creating a dynamic sky effect.
      */}
      <div className="desktop-cloud-scene">
        <div className="desktop-cloud-layer" data-depth="0.2">
          <div className="desktop-cloud"></div>
        </div>
        <div className="desktop-cloud-layer" data-depth="0.5">
          <div className="desktop-cloud-two"></div>
        </div>
        <div className="desktop-cloud-layer" data-depth="0.4">
          <div className="desktop-cloud-three"></div>
        </div>
        <div className="desktop-cloud-layer" data-depth="0.2">
          <div className="desktop-cloud-four"></div>
        </div>
        <div className="desktop-cloud-layer" data-depth="0.3">
          <div className="desktop-cloud-five"></div>
        </div>
        <div className="desktop-cloud-layer" data-depth="0.6">
          <div className="desktop-cloud-six"></div>
        </div>
      </div>

      {/*
        Desktop Icons
        Clickable icons positioned in the top-left corner of the desktop.
        Each icon represents a navigation item and can be clicked to open
        the corresponding window.
      */}
      <nav className="absolute top-8 left-8" aria-label="Desktop navigation">
        {navigation.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`desktop-icon ${selectedDesktopIcon === item.href ? "selected" : ""}`}
            onClick={() => {
              setSelectedDesktopIcon(item.href);
              openWindow(item.href, item.name);
            }}
            onDoubleClick={() => {
              setSelectedDesktopIcon(null);
              openWindow(item.href, item.name);
            }}
            aria-label={`Open ${item.name} window`}
            aria-pressed={selectedDesktopIcon === item.href}
          >
            <div className="mb-1">
              <Image
                src={getIconSrc(item.name)}
                alt={`${item.name} icon`}
                width={46}
                height={46}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div className="text-xs desktop-icon-label">
              {item.name}
            </div>
          </button>
        ))}
      </nav>

      {/*
        Windows
        Renders all open windows with their current positions, sizes, and states.
        Each window can be dragged, resized, minimized, and closed.
      */}
      {windows.map((window) => (
        <div
          key={window.id}
          className={`retro-window absolute ${window.isMinimized ? "hidden" : ""
            } ${activeWindow === window.id ? "active" : ""}`}
          style={{
            left: window.position.x,
            top: window.position.y,
            width: window.size.width,
            height: window.size.height,
            zIndex: window.zIndex,
          }}
          onClick={() => bringToFront(window.id)}
        >
          {/* Window Titlebar */}
          <header
            className="window-titlebar cursor-move"
            onMouseDown={(e) => startDrag(e, window.id)}
            role="banner"
            aria-label={`${window.title} window titlebar`}
          >
            <div className="flex items-center space-x-2">
              <span id={`window-title-${window.id}`}>{window.title}</span>
            </div>
            <div className="flex space-x-1">
              {/* Minimize Button */}
              <button
                type="button"
                className="w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer window-control-button window-minimize-button"
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(window.id);
                }}
                aria-label={`Minimize ${window.title} window`}
              >
                <span aria-hidden="true">−</span>
              </button>
              {/* Close Button */}
              <button
                type="button"
                className="w-7 h-7 bg-red-600 border-2 border-red-800 flex items-center justify-center text-white text-lg font-bold hover:bg-red-400 transition-colors cursor-pointer window-control-button window-close-button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeWindow(window.id);
                }}
                aria-label={`Close ${window.title} window`}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </header>

          {/* Window Content */}
          <div
            className="window-content h-full relative"
            style={{ overflow: windowLoading[window.id] ? 'hidden' : 'auto' }}
          >
            {/* Loader Overlay */}
            {windowLoading[window.id] && (
              <div className="window-loader-overlay">
                <WindowLoader isLoading={true} />
              </div>
            )}
            {windowContentMap[window.id]}
          </div>

          {/* Resize Handle - Windows 11 style */}
          <div
            className="cursor-se-resize"
            onMouseDown={(e) => startResize(e, window.id)}
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
      ))}

      {/*
        Start Menu
        Dropdown menu that appears when the start button is clicked.
        Contains navigation items and branding information.
      */}
      {startMenuOpen && (
        <nav
          className="start-menu"
          role="menu"
          aria-label="Start menu"
        >
          <div className="start-menu-content">
            <div className="start-menu-header-xp">
              <span className="start-menu-header-xp-logo" aria-hidden="true">
                <Image
                  src="/images/rw-logo.png"
                  alt=""
                  width={36}
                  height={36}
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
              <span className="ml-3 text-base font-bold">robotOS</span>
            </div>
            <div className="start-menu-items" role="menubar">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  role="menuitem"
                  className="start-menu-item flex items-center space-x-2"
                  onClick={() => {
                    openWindow(item.href, item.name);
                    setStartMenuOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openWindow(item.href, item.name);
                      setStartMenuOpen(false);
                    }
                  }}
                  onMouseEnter={() => setHoveredStartMenuItem(item.href)}
                  onMouseLeave={() => setHoveredStartMenuItem(null)}
                  aria-label={`Open ${item.name}`}
                >
                  <Image
                    src={getIconSrc(item.name, hoveredStartMenuItem === item.href)}
                    alt=""
                    width={18}
                    height={18}
                    style={{ width: "auto", height: "auto" }}
                    aria-hidden="true"
                  />
                  <span className="text-base">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}

      {/*
        Taskbar
        Fixed bottom bar containing the start button, running applications,
        and system clock. Provides quick access to open windows and navigation.
      */}
      <nav className="taskbar" role="toolbar" aria-label="Taskbar">
        <div className="flex items-center space-x-2 ml-2">
          {/* Start Button */}
          <button
            type="button"
            className={`start-button flex items-center px-2 py-1 ${startMenuOpen ? "bg-cyan-600" : ""}`}
            style={{ gap: "4px" }}
            onClick={toggleStartMenu}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleStartMenu(e);
              }
            }}
            aria-label="Open start menu"
            aria-expanded={startMenuOpen}
            aria-haspopup="menu"
          >
            <Image
              src="/images/rw-site-icon-start.png"
              alt=""
              width={27}
              height={27}
              style={{ width: "auto", height: "auto" }}
              aria-hidden="true"
            />
            <span className="text-sm font-bold">Start</span>
          </button>

          {/* Taskbar Icons */}
          {navigation.map((item) => {
            const window = windows.find((w) => w.id === item.href);
            // Only show taskbar button if window exists and is minimized
            if (!window || !window.isMinimized) {
              return null;
            }
            return (
              <button
                key={item.name}
                type="button"
                className="taskbar-icon"
                onClick={() => {
                  // Unminimize the window when taskbar button is clicked
                  unminimizeWindow(item.href);
                }}
                onMouseEnter={() => setHoveredTaskbarIcon(item.href)}
                onMouseLeave={() => setHoveredTaskbarIcon(null)}
                aria-label={`Restore ${item.name} window`}
              >
                <Image
                  src={getIconSrc(item.name, hoveredTaskbarIcon === item.href)}
                  alt=""
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* Clock */}
        <div className="ml-auto flex items-center">
          {hasMounted && (
            <div
              className="text-sm font-bold py-1 flex items-center h-15"
              style={{
                boxShadow: "inset 1px 1px 0 #404040",
                borderRadius: "20px",
                transform: "scale(0.47)",
                transformOrigin: "center",
                background: "#7a9aca",
                border: "2px solid #4a6a9a",
                paddingLeft: "22px",
                paddingRight: "16px",
                marginRight: "-45px",
              }}
            >
              <div className="clock-icon">
                <div className="hourglass"></div>
              </div>
              <span className="clock-time">
                <span className="clock-digits">{currentTime.toLocaleTimeString()}</span>
              </span>
            </div>
          )}
        </div>
      </nav>

      {/*
        Click Outside Handler
        Invisible overlay that deselects desktop icons when clicking
        outside of them. Uses pointer-events: none to not interfere
        with other interactions.
      */}
      <div
        className="absolute inset-0 z-0"
        onClick={() => setSelectedDesktopIcon(null)}
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
}
