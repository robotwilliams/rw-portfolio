/**
 * WindowLoader Component
 *
 * A spinning dot loader that appears when windows are opening.
 * Uses a pixel-perfect spinning animation with RobotOS styling.
 * Fades out to reveal the window content when loading is complete.
 */

interface WindowLoaderProps {
  isLoading: boolean;
}

export default function WindowLoader({ isLoading }: WindowLoaderProps) {
  if (!isLoading) return null;

  return (
    <div className="window-loader-overlay">
      <div className="window-loader">
        <div className="window-loader-spinner"></div>
      </div>
    </div>
  );
}
