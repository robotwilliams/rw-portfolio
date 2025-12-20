"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { checkAuth, login, logout } from "@/lib/admin-auth";
import AdminDashboard from "@/components/AdminDashboard";

/**
 * Admin Login Page
 *
 * Simple login form that redirects to dashboard on success.
 */
export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    async function verifyAuth() {
      const isAuth = await checkAuth();
      setAuthenticated(isAuth);
    }
    verifyAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const success = await login(username, password);

    if (success) {
      setAuthenticated(true);
    } else {
      setError("Invalid username or password");
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    await logout();
    setAuthenticated(false);
    setUsername("");
    setPassword("");
  };

  // Show loading state while checking auth
  if (authenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Show dashboard if authenticated
  if (authenticated) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // Show login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
            <Image
              src="/images/rw-logo.png"
              alt="Rob W Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">Rob W</span>
          </Link>
          <h1 className="text-xl font-semibold text-gray-700">Admin Login</h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
