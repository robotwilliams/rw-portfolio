"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import PageLoadWrapper from "./PageLoadWrapper";
import { ProjectWindowContextProvider } from "./ProjectWindowContext";
import RetroDesktop from "./RetroDesktop";

/**
 * Conditional Layout Wrapper
 *
 * Decides whether to show the full Windows 98 desktop interface or just render
 * the page content. The admin dashboard needs a clean interface without the
 * retro desktop UI, so this component checks the route and conditionally wraps content.
 *
 * How it works: uses Next.js usePathname() to get the current route, checks if
 * it starts with "/admin", and either renders children directly (admin) or wraps
 * them in RetroDesktop (regular routes).
 *
 * Performance: uses useMemo to memoize the route check and prevent unnecessary
 * re-renders when the pathname hasn't changed.
 *
 * This is a client component because usePathname() only works in client components.
 * The root layout is a server component, so this bridges server and client rendering.
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
