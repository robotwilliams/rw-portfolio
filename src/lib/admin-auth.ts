/**
 * Admin Authentication Utilities
 *
 * Client-side helpers for admin authentication. Handles communication between
 * React components and server API routes.
 *
 * Flow: user enters credentials, sent to server for validation against env vars,
 * server sets session cookie on success. Client checks cookie for auth status.
 */

/**
 * Check if user is authenticated by checking session cookie.
 * Called on page load to show login form or dashboard.
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
 * Authenticate user with credentials. Sends to server for validation.
 * On success, server sets session cookie for subsequent requests.
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
 * Clear session cookie via logout API. Ends user session.
 * Errors ignored since user is leaving anyway.
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
