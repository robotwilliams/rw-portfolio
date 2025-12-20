"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import PageLoadWrapper from "./PageLoadWrapper";
import { ProjectWindowContextProvider } from "./ProjectWindowContext";
import RetroDesktop from "./RetroDesktop";

/**
 * Conditional Layout Wrapper
 *
 * This is a smart routing component that decides whether to show the full
 * Windows 98 desktop interface or just render the page content directly.
 *
 * **Why This Exists**: The admin dashboard needs a clean, modern interface
 * without the retro desktop UI getting in the way. This component checks the
 * current route and conditionally wraps content.
 *
 * **How It Works**:
 * 1. Uses Next.js `usePathname()` hook to get current route
 * 2. Checks if route starts with "/admin"
 * 3. If admin route: renders children directly (no desktop interface)
 * 4. If regular route: wraps children in RetroDesktop with all the window management
 *
 * **Performance**: Uses `useMemo` to memoize the route check, preventing
 * unnecessary re-renders when the pathname hasn't changed.
 *
 * **Technical Note**: This is a client component because it uses `usePathname()`,
 * which is only available in client components. The root layout is a server
 * component, so this acts as the bridge between server and client rendering.
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
