"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import PageLoadWrapper from "./PageLoadWrapper";
import { ProjectWindowContextProvider } from "./ProjectWindowContext";
import RetroDesktop from "./RetroDesktop";

/**
 * Conditional Layout Wrapper
 *
 * Shows full Windows 98 desktop interface for regular routes, or just renders
 * content for admin routes. Admin needs clean UI without retro desktop.
 *
 * Uses usePathname() to check route. If it starts with "/admin", render children
 * directly. Otherwise wrap in RetroDesktop.
 *
 * useMemo prevents unnecessary re-renders when pathname hasn't changed.
 */
export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Check if current route is an admin route
  const isAdminRoute = useMemo(() => {
    return pathname?.startsWith("/admin") ?? false;
  }, [pathname]);

  // Skip RetroDesktop for admin routes - render children directly
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // Render full desktop interface for other routes
  return (
    <PageLoadWrapper>
      <ProjectWindowContextProvider>
        <RetroDesktop />
      </ProjectWindowContextProvider>
    </PageLoadWrapper>
  );
}
