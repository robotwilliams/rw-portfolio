/**
 * Admin Authentication Utilities
 *
 * Simple client-side helpers for checking authentication status.
 */

export async function checkAuth(): Promise<boolean> {
  try {
    const response = await fetch("/api/admin/check", {
      credentials: "include",
    });
    const data = await response.json();
    return data.authenticated === true;
  } catch {
    return false;
  }
}

export async function login(username: string, password: string): Promise<boolean> {
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function logout(): Promise<void> {
  try {
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch {
    // Ignore errors on logout
  }
}
