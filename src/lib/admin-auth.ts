/**
 * Admin Authentication Utilities
 *
 * Client-side authentication helpers for the admin dashboard. These functions handle
 * the communication between the React components and the server-side API routes.
 *
 * The authentication flow is simple but effective:
 * 1. User enters credentials in the login form
 * 2. Credentials are sent to the server via POST request
 * 3. Server validates against environment variables and sets a session cookie
 * 4. Client checks authentication status by reading the session cookie
 *
 * Security considerations:
 * - Credentials are never stored in the client code
 * - Session cookies are httpOnly and secure in production
 * - Network errors are handled gracefully
 * - No sensitive data is exposed in error messages
 */

/**
 * Check Authentication Status
 *
 * Verifies if the user is currently authenticated by checking the session cookie.
 * This is called on page load to determine if the user should see the login form
 * or the admin dashboard.
 *
 * @returns Promise that resolves to true if authenticated, false otherwise
 */
export async function checkAuth(): Promise<boolean> {
  try {
    const response = await fetch("/api/admin/check", {
      credentials: "include", // Important: sends cookies with the request
    });
    const data = await response.json();
    return data.authenticated === true;
  } catch {
    // If the request fails (network error, server down, etc.), assume not authenticated
    return false;
  }
}

/**
 * Login Function
 *
 * Attempts to authenticate the user with the provided credentials. The credentials
 * are sent to the server where they're validated against environment variables.
 * On success, the server sets a session cookie that's used for subsequent requests.
 *
 * @param username - The admin username (from environment variable)
 * @param password - The admin password (from environment variable)
 * @returns Promise resolving to an object with success status and optional error message
 */
export async function login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // Ensures cookies are sent and received
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.success) {
      return { success: true };
    }
    // Return the error message from the server (e.g., "Invalid credentials" or "Server configuration error")
    return { success: false, error: data.error || "Invalid credentials" };
  } catch {
    // Network errors (connection issues, CORS problems, etc.)
    return { success: false, error: "Network error. Please check your connection." };
  }
}

/**
 * Logout Function
 *
 * Clears the session cookie by calling the logout API endpoint. This effectively
 * ends the user's session and requires them to log in again to access the admin dashboard.
 *
 * Note: Errors during logout are silently ignored since the user is already leaving
 * the admin area, and there's no critical action that needs to happen.
 */
export async function logout(): Promise<void> {
  try {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include", // Required to clear the httpOnly cookie
    });
  } catch {
    // Ignore errors on logout - user is leaving anyway, no need to show errors
  }
}
