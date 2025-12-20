/**
 * Admin Layout
 *
 * Separate layout for admin pages that bypasses the desktop interface.
 * This ensures the admin login and dashboard are accessible without
 * the Windows 98 desktop UI interfering.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
