"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import PageLoadWrapper from "./PageLoadWrapper";
import { ProjectWindowContextProvider } from "./ProjectWindowContext";
import RetroDesktop from "./RetroDesktop";

/**
 * Conditional Layout Wrapper
 *
 * Renders RetroDesktop for main site routes,
 * but skips it for admin routes.
 *
 * This component checks the pathname and conditionally renders
 * either the desktop interface or just the children (for admin routes).
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
