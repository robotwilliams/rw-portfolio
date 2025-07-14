"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import WindowContent from "./WindowContent";
import WindowLoader from "./WindowLoader";

/**
 * Window Interface
 *
 * Defines the structure for each window in the desktop environment.
 * Windows can be opened, closed, minimized, moved, and resized.
 */
interface Window {
  id: string; // Unique identifier for the window
  title: string; // Display title in the window titlebar
  isOpen: boolean; // Whether the window is currently open
  isMinimized: boolean; // Whether the window is minimized
  zIndex: number; // Stacking order for overlapping windows
  position: { x: number; y: number }; // Window position on screen
  size: { width: number; height: number }; // Window dimensions
}

/**
 * Window Content Mapping
 *
 * Maps route paths to their corresponding content components.
 * This allows the desktop to load different content based on the current route.
 */
const windowContentMap: Record<string, React.ReactNode> = {
  "/": <WindowContent page="home" />,
  "/about": <WindowContent page="about" />,
  "/work": <WindowContent page="work" />,
  "/contact": <WindowContent page="contact" />,
};

/**
 * RetroDesktop Component
 *
 * This is the main component that creates the RobotOS desktop interface.
 * It provides:
 * - Desktop background with grid pattern
 * - Draggable desktop icons for navigation
 * - Window management system (open, close, minimize, resize, drag)
 * - Taskbar with start menu and running applications
 * - Authentic RobotOS styling and interactions
 *
 * The component uses React state to manage:
 * - Window positions, sizes, and states
 * - Active window selection
 * - Desktop icon selection
 * - Start menu visibility
 * - Drag and resize operations
 *
 * Special handling for the work page:
 * - The work page opens in its own window with interactive project grid
 * - Project icons within the work window open detailed project windows
 * - Only one project window can be open at a time within the work environment
 * - All content stays within the desktop environment (no page navigation)
 */
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

  /**
   * Get Time-Based Background Gradient
   *
   * Returns different gradient backgrounds based on the current time of day:
   * - Morning (6-11): Goldenrod to light blue
   * - Afternoon (12-17): Yellow to orange
   * - Evening (18-21): Blue to pink (current)
   * - Night (22-5): Dark blue gradient
   */
  const getTimeBasedGradient = (hour: number) => {
    if (hour >= 6 && hour < 12) {
      // Morning: Bright blue to pink with smooth blending
      return "linear-gradient(180deg, #6bb8e6 0%, #7fc4f0 20%, #96c8f0 40%, #b0d0e8 60%, #c0b8d8 80%, #d8a8c8 90%, #f0a0c8 95%)";
    } else if (hour >= 12 && hour < 18) {
      // Afternoon: Yellow to orange to pink with smooth blending
      return "linear-gradient(180deg, #f0d000 0%, #e8b030 25%, #e0a83d 45%, #e8b065 60%, #d0a8a8 80%, #d8a8c8 90%, #f0a0c8 95%)";
    } else if (hour >= 18 && hour < 22) {
      // Evening: Purple to pink with smooth blending
      return "linear-gradient(180deg, #8360cb 0%, #9575c9 25%, #a18cc9 45%, #b892b8 60%, #c0a0c0 80%, #d8a8c8 90%, #f0a0c8 95%)";
    } else {
      // Night: Dark indigo to pink with smooth blending
      return "linear-gradient(180deg, #3b0072 0%, #4a1a7a 25%, #5a3c83 45%, #7a6ba8 60%, #9880a8 80%, #d8a8c8 90%, #f0a0c8 95%)";
    }
  };

  /**
   * Get appropriate text color for desktop icons based on time of day
   * Ensures good contrast against the background gradient
   */
  const getIconTextColor = (hour: number) => {
    if (hour >= 6 && hour < 12) {
      // Morning: Dark text for light background
      return "#000000";
    } else if (hour >= 12 && hour < 18) {
      // Afternoon: Dark text for light background
      return "#000000";
    } else if (hour >= 18 && hour < 22) {
      // Evening: Dark text for light background
      return "#000000";
    } else {
      // Night: Light text for dark background
      return "#ffffff";
    }
  };

  /**
   * Navigation Configuration
   *
   * Defines the main navigation items that appear as desktop icons.
   * Each item has a name, href (route), and emoji icon.
   * Uses clean retro-style icons inspired by minimal web design.
   */
  const navigation = [
    { name: "About", href: "/about", icon: "about" },
    { name: "Work", href: "/work", icon: "folder" },
    { name: "Contact", href: "/contact", icon: "contact" },
  ];

  /**
   * Calculate Responsive Window Size
   *
   * Determines window size based on screen size, scaling down proportionally
   * on smaller screens like a responsive OS would behave.
   */
  const getResponsiveWindowSize = () => {
    const screenWidth = window.innerWidth;

    // Base sizes for large screens
    const baseWidth = 850;
    const baseHeight = 550;

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

  /**
   * Calculate Cascading Position for New Windows
   *
   * Determines the position for new windows with a cascading effect.
   * Each new window is offset diagonally from the previous one,
   * similar to Windows 95/98 behavior. Ensures windows always fit on screen.
   * First window starts higher up for better visual balance.
   */
  const getCascadingPosition = () => {
    const windowSize = getResponsiveWindowSize();
    const cascadeOffset = 35; // Larger offset for better spacing

    // Count how many windows are currently open
    const openWindowCount = windows.filter((w) => !w.isMinimized).length;

    // Start higher up for the first window, then cascade
    const baseX = Math.max(0, (window.innerWidth - windowSize.width) / 2);
    const baseY =
      Math.max(0, (window.innerHeight - windowSize.height) / 2) - 50; // Start higher

    const x = baseX + openWindowCount * cascadeOffset;
    const y = baseY + openWindowCount * cascadeOffset;

    // Ensure window doesn't go off-screen with proper margins
    const maxX = Math.max(0, window.innerWidth - windowSize.width - 20);
    const maxY = Math.max(0, window.innerHeight - windowSize.height - 80); // Leave space for taskbar

    return {
      x: Math.min(Math.max(0, x), maxX),
      y: Math.min(Math.max(0, y), maxY),
    };
  };

  /**
   * Initialize Windows Based on Current Path
   *
   * Automatically opens a window for the current route when the component mounts
   * or when the pathname changes. This ensures users see content relevant to
   * their current location in the app.
   */
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
  }, [pathname, windows.length]);

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
          const maxX = Math.max(
            0,
            window.innerWidth - draggedWin.size.width - 20
          );
          const maxY = Math.max(
            0,
            window.innerHeight - draggedWin.size.height - 80
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

        // Constrain maximum size to viewport
        const maxWidth = window.innerWidth - 40;
        const maxHeight = window.innerHeight - 120;

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
  }, [draggedWindow, dragOffset, resizingWindow, resizeStart]);

  /**
   * Open Window Function
   *
   * Opens a new window or brings an existing window to the front.
   * If the window already exists, it's restored and brought to the front.
   * If it doesn't exist, a new window is created at the center of the screen.
   */
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

  /**
   * Bring Window to Front Function
   *
   * Makes a window the active window and gives it the highest z-index
   * so it appears on top of other windows.
   */
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

  /**
   * Start Drag Function
   *
   * Initiates window dragging when the user clicks and drags the titlebar.
   * Records the initial mouse position and window position for smooth dragging.
   */
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

  /**
   * Start Resize Function
   *
   * Initiates window resizing when the user clicks and drags the resize handle.
   * Records the initial mouse position and window size for smooth resizing.
   */
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

  /**
   * Toggle Start Menu Function
   *
   * Opens or closes the start menu when the start button is clicked.
   * Prevents event bubbling to avoid immediate closure.
   */
  const toggleStartMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStartMenuOpen(!startMenuOpen);
  };

  /**
   * Set Mounted State
   *
   * Ensures the component is fully mounted before rendering
   * time-sensitive elements like the clock.
   */
  useEffect(() => {
    setHasMounted(true);
  }, []);

  /**
   * Handle Window Resize
   *
   * Ensures all windows stay within viewport bounds when the screen is resized.
   * This prevents windows from being positioned outside the visible area.
   * Also dynamically resizes windows when scaling back up for responsive behavior.
   * Restores proper cascading positions for all windows.
   */
  useEffect(() => {
    const handleWindowResize = () => {
      setWindows((prev) => {
        // Recalculate cascading positions for all windows
        const updatedWindows = prev.map((win, index) => {
          const newSize = getResponsiveWindowSize();
          const cascadeOffset = 35;

          // Calculate new cascading position based on window order
          const baseX = Math.max(0, (window.innerWidth - newSize.width) / 2);
          const baseY =
            Math.max(0, (window.innerHeight - newSize.height) / 2) - 50; // Start higher

          const newX = baseX + index * cascadeOffset;
          const newY = baseY + index * cascadeOffset;

          // Ensure window doesn't go off-screen
          const maxX = Math.max(0, window.innerWidth - newSize.width - 20);
          const maxY = Math.max(0, window.innerHeight - newSize.height - 80);

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
      </div>

      {/*
        Desktop Icons
        Clickable icons positioned in the top-left corner of the desktop.
        Each icon represents a navigation item and can be clicked to open
        the corresponding window.
      */}
      <div className="absolute top-8 left-8">
        {navigation.map((item) => (
          <div
            key={item.name}
            className={`desktop-icon ${selectedDesktopIcon === item.href ? "selected" : ""
              }`}
            onClick={() => {
              setSelectedDesktopIcon(item.href);
              openWindow(item.href, item.name);
            }}
            onDoubleClick={() => {
              setSelectedDesktopIcon(null);
              openWindow(item.href, item.name);
            }}
          // onMouseEnter={() => setHoveredDesktopIcon(item.href)}
          // onMouseLeave={() => setHoveredDesktopIcon(null)}
          >
            <div className="mb-1">
              {item.name === "About" ? (
                <Image
                  src="/images/rw-logo.png"
                  alt={item.name}
                  width={46}
                  height={46}
                  style={{ width: "auto", height: "auto" }}
                />
              ) : item.name === "Work" ? (
                <Image
                  src="/images/rw-site-icon-work.png"
                  alt={item.name}
                  width={46}
                  height={46}
                  style={{ width: "auto", height: "auto" }}
                />
              ) : item.name === "Contact" ? (
                <Image
                  src="/images/rw-site-icon-folder-closed-contact.png"
                  alt={item.name}
                  width={46}
                  height={46}
                  style={{ width: "auto", height: "auto" }}
                />
              ) : null}
            </div>
            <div
              className="text-xs"
              style={{ color: getIconTextColor(currentTime.getHours()) }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>

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
          <div
            className="window-titlebar cursor-move"
            onMouseDown={(e) => startDrag(e, window.id)}
          >
            <div className="flex items-center space-x-2">
              <span>{window.title}</span>
            </div>
            <div className="flex space-x-1">
              {/* Minimize Button */}
              <button
                className="w-7 h-7 bg-yellow-600 border-2 border-yellow-800 flex items-center justify-center text-lg font-bold hover:bg-yellow-500 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(window.id);
                }}
                style={{
                  boxShadow:
                    "inset 1px 1px 0 #ffff80, inset -1px -1px 0 #808000",
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
                  closeWindow(window.id);
                }}
                style={{
                  boxShadow:
                    "inset 1px 1px 0 #ff8080, inset -1px -1px 0 #800000",
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
        <div className="start-menu">
          <div className="start-menu-content">
            <div className="start-menu-header-xp">
              <span className="start-menu-header-xp-logo">
                <Image
                  src="/images/rw-logo.png"
                  alt="robotOS"
                  width={36}
                  height={36}
                  style={{ width: "auto", height: "auto" }}
                />
              </span>
              <span className="ml-3 text-base font-bold">robotOS</span>
            </div>
            <div className="start-menu-items">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="start-menu-item flex items-center space-x-2"
                  onClick={() => {
                    openWindow(item.href, item.name);
                    setStartMenuOpen(false);
                  }}
                  onMouseEnter={() => setHoveredStartMenuItem(item.href)}
                  onMouseLeave={() => setHoveredStartMenuItem(null)}
                >
                  {item.name === "About" ? (
                    <Image
                      src="/images/rw-logo.png"
                      alt={item.name}
                      width={18}
                      height={18}
                      style={{ width: "auto", height: "auto" }}
                    />
                  ) : item.name === "Contact" ? (
                    <Image
                      src="/images/rw-site-icon-folder-closed-contact.png"
                      alt={item.name}
                      width={18}
                      height={18}
                      style={{ width: "auto", height: "auto" }}
                    />
                  ) : (
                    <Image
                      src={
                        hoveredStartMenuItem === item.href
                          ? "/images/rw-site-icon-folder-open.png"
                          : "/images/rw-site-icon-folder-close.png"
                      }
                      alt={item.name}
                      width={18}
                      height={18}
                      style={{ width: "auto", height: "auto" }}
                    />
                  )}
                  <span className="text-base">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/*
        Taskbar
        Fixed bottom bar containing the start button, running applications,
        and system clock. Provides quick access to open windows and navigation.
      */}
      <div className="taskbar">
        <div className="flex items-center space-x-2 ml-2">
          {/* Start Button */}
          <button
            className={`start-button flex items-center px-2 py-1 ${startMenuOpen ? "bg-cyan-600" : ""
              }`}
            style={{ gap: "4px" }}
            onClick={toggleStartMenu}
          >
            <Image
              src="/images/rw-site-icon-start.png"
              alt="Start"
              width={27}
              height={27}
              style={{ width: "auto", height: "auto" }}
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
              <div
                key={item.name}
                className="taskbar-icon"
                onClick={() => {
                  // Unminimize the window when taskbar button is clicked
                  unminimizeWindow(item.href);
                }}
                onMouseEnter={() => setHoveredTaskbarIcon(item.href)}
                onMouseLeave={() => setHoveredTaskbarIcon(null)}
              >
                {item.name === "About" ? (
                  <Image
                    src="/images/rw-logo.png"
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                ) : item.name === "Contact" ? (
                  <Image
                    src="/images/rw-site-icon-folder-closed-contact.png"
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                ) : (
                  <Image
                    src={
                      hoveredTaskbarIcon === item.href
                        ? "/images/rw-site-icon-folder-open.png"
                        : "/images/rw-site-icon-folder-close.png"
                    }
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                )}
              </div>
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
      </div>

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
