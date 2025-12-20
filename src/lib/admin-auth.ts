/**
 * Admin Authentication Utilities
 *
 * Client-side helpers for admin authentication. These functions handle communication
 * between React components and the server API routes.
 *
 * The flow works like this: user enters credentials, they're sent to the server
 * for validation against environment variables, and on success the server sets a
 * session cookie. The client then checks this cookie to determine auth status.
 *
 * Security: credentials never live in client code, session cookies are httpOnly
 * and secure in production, network errors are handled gracefully, and we don't
 * expose sensitive data in error messages.
 */

/**
 * Check Authentication Status
 *
 * Verifies if the user is authenticated by checking the session cookie. Called
 * on page load to decide whether to show the login form or the dashboard.
 *
 * @returns Promise resolving to true if authenticated, false otherwise
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
 * Authenticates the user with provided credentials. Sends them to the server
 * for validation against environment variables. On success, the server sets a
 * session cookie used for subsequent requests.
 *
 * @param username - Admin username from environment variable
 * @param password - Admin password from environment variable
 * @returns Promise with success status and optional error message
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
 * Clears the session cookie by calling the logout API endpoint. This ends the
 * user's session and requires them to log in again.
 *
 * Errors are silently ignored since the user is leaving anyway.
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
